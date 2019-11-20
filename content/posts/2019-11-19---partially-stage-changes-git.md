---
title: Partially Stage and Commit Changes in Git
date: "2019-11-19"
template: "post"
draft: false
slug: "/posts/partially-stage-changes-in-git"
category: "git"
description: "Did you know you can partially stage and commit your changes in git?"
---

Did you know you can partially stage and commit your changes in git?

Suppose you have file `numbers.txt` checked into your git repo with the following content:

```
1
2
3
4
5
6
7
8
9
10
```

Modify `numbers.txt` to look like this:
```
1 is for one.
2
3
4
5
6
7
8
9
10 is for ten.
```

Use `git add -p` to interactively decide which chunks of the modified file to commit.  

Hit `n` to bypass the first chunk.   

```
diff --git a/numbers.txt b/numbers.txt
index f00c965..32b6ae7 100644
--- a/numbers.txt
+++ b/numbers.txt
@@ -1,4 +1,4 @@
-1
+1 is for one.
 2
 3
 4
Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]? n
```

Hit `y` to stage the second chunk.

```
@@ -7,4 +7,4 @@
 7
 8
 9
-10
+10 is for ten.
Stage this hunk [y,n,q,a,d,K,g,/,e,?]? y
```

Now commit as normal.

```
$ git commit -m "Modify the 10th line"
```

You still have the changes to line 1 in your workspace but now your modification of line 10 is committed to the repo.




