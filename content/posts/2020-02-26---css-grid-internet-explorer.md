---
title:  Make Your Basic CSS Grids Internet Explorer Proof
date: "2020-02-26"
template: "post"
draft: false
slug: "/posts/css-grid-internet-explorer"
category: "css"
description: "Don't let Internet Explorer get you down."
---

It's happened to all of us.  The UX designer hands over a fairly complex UI mockup.  You spend days working on your front end feature.  You do your best to make it look as pixel perfect to the mockup as possible.  CSS grids are a joy to work with and implementing complex layouts suddenly become child's play.

And then it happens.

You remember your company still supports Internet Explorer, so you quickly fire up the page in IE. 

The look of horror drops over your face.  All the fields and labels are all over the place and nothing is as it *should* appear.   

You raise your fists in the air asking:

"Why?! Why?! Why?!"

After a bit of research (i.e. googling around), you realize the grid styling implemented in IE does not work the same as the modern browser.  


Let's start with a simple example that illustrates what can happen.

Suppose you had the following snippet of HTML:
```
<div>
  <div>First Item</div>
  <div>Second Item</div>
  <div>Third Item</div>
</div>
```

As you might expect, it would render to the webpage to look something like:

![Divs in rows](/media/grid-rows.png)

By adding a container class to the outer div and defining the container as a grid, we can arrange the items in columns instead of rows.

**HTML**
```
<div class="container">
  <div>First Item</div>
  <div>Second Item</div>
  <div>Third Item</div>
</div>
```

**CSS**
```
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
}
```
![Grid in columns](/media/grid-columns.png)

So what is happening here?

In the container class, we are saying we want the display to be a grid.
We also want the grid to be in 3 columns of size 100px.  The children (in our case, the 3 inner divs) of this container div will fall into those columns automatically.

Now fire up this same page in Internet Explorer and what do you get?

![Divs in rows](/media/grid-rows.png)

As you probably guessed, the items are back to the default style without the grid columns.   

Internet Explorer's native grid is different and there isn't necessarily an easy one to one mapping for every CSS grid feature.  But with some simple cases like this, there is a simple solution.

First, we need to add the Microsoft equivalent to the container grid.

Excerpt:
```
  display: -ms-grid; 
  -ms-grid-columns: 100px 100px 100px;
```

Unlike CSS Grids, the children elements will not automatically align into the columns.  Each child needs to be numbered via a style and have that style applied to the element.

**CSS**

```
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  display: -ms-grid; 
  -ms-grid-columns: 100px 100px 100px;
}

.first {
  -ms-grid-column: 1;
}

.second {
  -ms-grid-column: 2;
}

.third {
  -ms-grid-column: 3;
}

```


**HTML**

```
<div class="container">
  <div class="first">First Item</div>
  <div class="second">Second Item</div>
  <div class="third">Third Item</div>
</div>

```

Fire it up in Internet Explorer and you have the column layout as you would expect.

![Grid in columns](/media/grid-columns.png)

It doesn't hurt to have both grid styles in your CSS. The browser will simple ignore what it doesn't know.  You can also do a similar thing for `grid-template-rows`.  

In conclusion, although it's not perfect, some of the CSS Grid features map to MS Grid.  Understanding how they map will help make your pages more robust and consistent looking across browsers.

*NOTE: I'm using Internet Explorer 11.
