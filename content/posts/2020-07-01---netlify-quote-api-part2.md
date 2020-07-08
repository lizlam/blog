---
title: "Create Your Own Quote API with Netlify Functions - Part 2"
date: "2020-07-01"
template: "post"
draft: false
slug: "/posts/netlify-functions-quote-api-2"
category: "Netlify"
description: "A 3 part series on creating a quote API with Netlify Functions."
---
This is a 3 part exercise on how to create and use your own quote API with Netlify functions.  

Part 1: Get a Netlify function up and running locally.    
Part 2: Deploy the function to the Netlify platform.    
Part 3: Tie it all together by using the deployed API to display quotes in a React app.    
    
If you have been following along from Part 1, push your `random-quotes` project to your git hosting provider.  I'm using GitHub, but other providers such as GitLab or BitBucket will work as well.   

0. [Install the Netlify app](https://developer.github.com/apps/installing-github-apps/) on GitHub   
1. [Sign up](https://app.netlify.com/signup) for a [Netlify](https://www.netlify.com/) account.  
2. Once you're logged in, click on the ***New site from git*** button.
3. Click on the GitHub button
4. Authorize Netlify to have access to your GitHub account
5. Search for and select the `random-quotes` repository. 
6. Fill in the following:        
   Build command: `yarn build`.    
   Publish directory: `build`.      
7. Click on ***Deploy site***

Once the deploy is finish, you should see a unique Netlify URL that looks something like this:
https://gracious-jones-94f7bb.netlify.app

Test your deployed API by navigating to:
https://gracious-jones-94f7bb.netlify.app/.netlify/functions/quotes

If you see a quote, congratulations! You've deployed your first Netlify Function with usable quote API!

*NOTE: Your exact URL will be unique to you.*

In the next and final section, we will use this API to display a quote in our React app.
