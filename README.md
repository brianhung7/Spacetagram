# Spacetagram 🚀

Brian Pham's Submission for Shopify's Frontend Developer position.

[View the live version of Spacetagram Here](https://silly-cori-57ec5f.netlify.app/)
## About

  Shopify's front end developer challenge was to make a webpage that can pull images from NASA's API and and allow users to 'like' and 'unlike' images. Furthermore information about each image will be displayed, in my case we can view descriptions and the published date in a human-readable format. 
  
  Some additional features I added was **animating the like action**, **a loading state while waiting for API data**, **the ability to leave comments**, and **refreshing API calls by going forward or backwards in time.**


## Getting Started Locally 
1. Clone down the repository with ```git clone https://github.com/brianhung7/Spacetagram.git```
2. ```npm install``` to install dependencies.
3. ```npm start``` to spin up the application.

## Technologies

Project was built in Javascript, React, and Material UI.  Deployment was done through netlify. React was chosen as my library of choice as it is great at making reusable components in addition to making it easy to make single page applications. This was also my first time utilizing Material UI as I wanted to get in some practice with React Component libraries. Furthermore, Material UI made styling a breeze and extremely efficient without having to fiddle with minor CSS problems.

## Features
- Pulls from NASA Picture Of The Day API
- Like/Unlike photos with an animation
- Loading state while waiting for NASA's API to return data
- Refresh API calls and images by either increasing/decreasing the view date
- Comment functionality 

## Future
- Add a date selector to view photos from specifics dates
