const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance) {
  let browser;
  let obj
  try {
    browser = await browserInstance;
    obj = await pageScraper.scraper(browser);
    // console.log(obj)
    return obj
  }
  catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
