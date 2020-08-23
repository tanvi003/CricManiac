# IPL DASHBOARD :trophy:
<h2 align="left">  Front End Challenge – IPL </h2>

Vipul is a big fan of cricket but lately has lost all his interest in the game because of all the entertainment/noise surrounding it. He has never followed the IPL, but this year he's contemplating whether to follow the tournament or not. He has been reading interesting trivia about the IPL, but he hasn't found anything interesting yet.

Use the IPL data given below to create a web app (a dashboard using data visualizations/graphs) with interesting, out-of-the-box stats or trivia to get Vipul interested in the IPL.

Data set that is taken into account is https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis <br/>
Website Link : https://ipltime.netlify.app/

## Setting up the structure of the project
The first initial step was to convert the given data set of CSV file to JSON to easily manipulate the data according to the requirements. Then the main task was to create a file
with necessary functions to manipulate the data.

## Technology Stack used
<h4>Front End Framework used</h4> ReactJS - The main reason I used React for this project was due to it's features as it provides Component based structure and a fast render.Moreover it's feature of one-way data binding and Virtual DOM</br>
<h4>Markup Language</h4> HTML<br/>
<h4>Programming Language </h4>JavaScript<br/>
<h4>Styling </h4>CSS,TailwindCSS<br/>
<h4>Javascript Library for building Charts </h4>Recharts<br/>

## BONUS POINTS
<b>Use of VueJs</b> - No I have not made this project on VueJs instead used ReactJS. <br/>
<b> Optimization of Loading Time </b> I have compressed the images and used png for reducing the loading time of the website.I have also tried to place CSS and JavaScript in external files as much as possible as it’s a best practice and makes the site easier to maintain and update.

<img src= "https://github.com/tanvi003/CricManiac/blob/develop/src/Screenshots/Loading%20Time.PNG"/>

<b>Mobile Responsive</b> I have used Media Queries to make it mobile responsive. <br/>
<b> Progressive Web-App and Offline </b> Added a serviceWorker.js file which lets the app load faster on subsequent visits in production, and gives
 it offline capabilities. However, it also means that developers (and users)
 will only see deployed updates on subsequent visits to a page, after all the
 existing tabs open on the page have been closed, since previously cached
 resources are updated in the background.

## SCREENSHOTS

<img src= "https://github.com/tanvi003/CricManiac/blob/develop/src/Screenshots/LandingPage.PNG"/>
<img src ="https://github.com/tanvi003/CricManiac/blob/develop/src/Screenshots/Dashboard.PNG"/>
