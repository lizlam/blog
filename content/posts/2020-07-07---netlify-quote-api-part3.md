---
title: "Create Your Own Quote API with Netlify Functions - Part 3"
date: "2020-07-07"
template: "post"
draft: false
slug: "/posts/netlify-functions-quote-api-3"
category: "Netlify"
description: "A 3 part series on creating a quote API with Netlify Functions."
---

This is a 3 part exercise on how to create and use your own quote API with Netlify functions.  

Part 1: Get a Netlify function up and running locally.    
Part 2: Deploy the function to the Netlify platform.    
Part 3: Tie it all together by using the deployed API to display quotes in a React app.    

If you've been following along, you should now have a working public API that returns a random quote.  In this last part of the series, we will use that API and display the quote in our React app.    

Go into the `src` directory and replace `App.js` with the following:

```
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const url = '/.netlify/functions/quotes';
  const [quote, setQuote] = useState();

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setQuote(data.quote);
      return data;
    }
    getQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {quote}
        </p>
      </header>
    </div>
  );
}

export default App;
```

If you are a React developer, this should feel pretty familiar to you.  If not, this is essentially a [functional component](https://reactjs.org/docs/components-and-props.html) that uses [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to call our quotes api. 
 The component returns the [JSX](https://reactjs.org/docs/introducing-jsx.html) portion which displays the quote. 

Start your dev environment if you haven't already with `netlify dev`.  Open up a browser and go to `http://localhost:8888`.  You should see a screen something like the following:

![Quote being displayed](https://dev-to-uploads.s3.amazonaws.com/i/yde9uioup8xbh585d75z.png)
    
Commit and push these new changes to GitHub.  This should trigger a redeploy on Netlify.  Once the redeploy is complete, you should be able to navigate to your public url and see the same thing. 

Congratulations! You did it! You've created a quotes API, deployed it to Netlify and used it in a React app. Hopefully this example serves as a simple foundation on how to build API's with the power of serverless technologies.
