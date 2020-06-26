---
title: "Create Your Own Quote API with Netlify Functions - Part 1"
date: "2020-06-26"
template: "post"
draft: false
slug: "/posts/netlify-functions-quote-api-1"
category: "Netlify"
description: "A 3 part series on creating a quote API with Netlify Functions."
---

This is a 3 part exercise on how to create and use your own quote API with Netlify functions.  

Part 1: Get a Netlify function up and running locally.    
Part 2: Deploy the function to the Netlify platform.    
Part 3: Tie it all together by using the deployed API to display quotes in a React app.    

A serverless function is a single purpose function that is maintained and hosted on a cloud provider's infrastructure.  AWS Lambdas is Amazon's solution to serverless functions and you can think of Netlify functions as a friendly wrapper around AWS Lambdas. 
      
Let's start by installing the Netlify command line interface:    
```
npm install -g netlify-cli
```
Using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html), set up a new project and navigate into it:
```
npx create-react-app my-random-quotes
cd my-random-quotes
```
Create a `netlify.toml` file with the following content:
```
[build]
  functions = "functions/"
```
This will define where we will put our API code.  In this case, a `functions` directory relative to our project root.    

Let's create a starter function:
```
netlify functions:create
```

This will invoke an interactive prompt. Pick the `js-hello-world` template and name your function `quotes`.

A `quotes` subdirectory will be created under the `functions` directory.  It will also create a `quotes.js` file.

Open the `quotes.js` file and replace the contents with the following:
```
// $project_root/functions/quotes/quotes.js
exports.handler = async (event, context) => {

  const quotes = [
    {"quote": "You gotta be kidding me?"},
    {"quote": "Will you be my neighbor?"},
    {"quote": "Liz is awesome!"}
  ]; 
   
  const number = Math.floor(Math.random() * quotes.length);
   const quote = quotes[number];
    
   return {
     statusCode: 200,
     body: JSON.stringify(quote)
   };
    
};
```
Don't worry too much about the content of this code if it seems unfamiliar.  It's just a bit of Node.js that will randomly return a quote from the quotes array.  
  
Start a development environment with the following command:
```
netlify dev
```
Ok, the hard part is over!    
    
Let's test our function locally by opening up a browser and navigating to `localhost:8888/.netlify/functions/quotes`.  

If everything goes as expected, you should see a JSON object containing a random quote.

In the next post, we'll setup a Netlify account and deploy our function.