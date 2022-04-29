const browserObject = require('./browser');
const scrapeAll = require('./pageController');


//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
let obj = scrapeAll(browserInstance)

console.log(obj)