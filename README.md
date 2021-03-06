# Stocks app

## Deployed application - Live demo

React web app is `deployed on github pages`. See a `live demo` in below link.
* React web app - https://kdnc.github.io/stocks-app

## Notable items in the application

* ### `Redux` is used to manage the state in the application.
* ### `Redux Saga` has been used to handle side effects in the application.
* ### `React router's BrowserRouter ` is used for the routing.
* ### Errors handling is added to the application.
* ### Stocks can be searched either by key-press 'ENTER' or by clicking search button.
* ### Stock results are displayed in 3-columns result in desktop screens and 1 column on mobile displays.
* ### Loading spinner is added.
* ### Stock metadata are loaded in the background while the stock cards are displayed.
* ### BONUS task is also completed

## How to run, test and build frontend React app

* Open a command prompt and navigate to `stocks-app` folder
    
        cd stocks-app

* Run below command to install npm packages

        npm install

* Run the React app for development using below command. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.
        
        npm start

* Build React app for production  to the `build` folder using below command. It correctly bundles React in production mode and optimizes the build for the best performance. 
        
        npm run build
        
## Sample images of the app

Desktop screen search page

![](https://i.ibb.co/sqGxPc6/Desktop-screen-search-page.png)

Mobile screen search page

![](https://i.ibb.co/d7jLCmH/Mobile-screen-search-page.png)

Stock price data page

![](https://i.ibb.co/rcpGq8b/Stock-metadata-fetching-in-the-background-screen.png)

Sort control displayed to sort the offers

![](https://i.ibb.co/YtgTkt1/Stock-price-data-page.png)
