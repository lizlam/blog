---
title: Keep your SQLite database updated with p4 triggers  
date: "2023-08-04"
template: "post"
draft: false
slug: "/posts/p4-triggers-sqlite"
category: p4
tags:
  - p4
  - jq
  - sqlite
description: "Keep your SQLite database updated with p4 triggers."
---
Following my [last post](https://grepliz.netlify.app/posts/jq-p4-sqlite) on creating SQL statements with `jq`, it was a natural next step to want to keep the SQLite database updated with any new changelists submitted to the Perforce server.

There are really just two things needed for this. 

* Create a shell script that outputs the appropriate SQL statement.
* Create a  Perforce trigger that executes the shell script.

### Create the shell script

Create a file called `addrow.sh` with the following content:

```
#!/bin/sh

changelist=$1
user=$2
description=`p4 -ztag -Mj describe -s $1 | jq -s '.[] | .desc'`
time=`p4 -ztag -Mj describe -s $1 | jq -s '.[] | .time'`
command="insert into changes values($changelist, \"$user\", $time, $description);"

echo $command | sqlite3 /path/to/changelists.db
```

This scripts takes two arguments, the changelist number and user.  Using the `p4 describe` command and `jq`, we get the changelist description and assign it to the variable `description`.  A similar process is used to get the timestamp.  Taking all those variables, we then construct the SQL statement.

Finally, the script echoes out the `insert` statement to STDOUT and pipes it into your SQLite database.   

### Create the trigger

We want to run the above script every time a user submits a change.  Perforce has an event listening mechanism called `triggers` which you can read in depth about [here](https://www.perforce.com/manuals/cmdref/Content/CmdRef/p4_triggers.html).

The trigger will look something like this:

```
update-sqlite change-commit //... “/path/to/addrow.sh %change% %user%"
```

Here is a quick explanation of the different parts of the trigger:

`update-sqlite` - This is just an arbitrary name of the trigger.    
`change-commit` - This tells the Perforce server to listen on a post submit event.    
`\\…` - The depot path to listen for the `change-commit` event.    
`”path/to/addrow.sh %change% %user%”` - The actual command to run.     

Now every time a user submits a change, your SQLite changes table will be updated as well.