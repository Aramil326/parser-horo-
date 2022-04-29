const scraperObject = {
  url: 'https://horo.mail.ru/',
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    // Navigate to the selected page
    await page.goto(this.url);
    // Wait for the required DOM to be rendered
    await page.waitForSelector('.portal-menu');
    // Get the link to all the required books
    let urls = await page.$$eval('div > div > div > div >a', links => {
      links = links.filter(link => link.getAttribute('data-logger') === "horo__ZodiacSign")
      links = links.map(el => el.href)
      return links;
    });

    // Loop through each of those links, open a new page instance and get the relevant data from them
    let pagePromise = (link) => new Promise(async (resolve, reject) => {
      let dataObj = {};
      let newPage = await browser.newPage();
      await newPage.goto(link);
      dataObj['day_&_prediction'] = await newPage.$eval('.hdr__inner', text => text.textContent);
      dataObj['paragraph_1'] = await newPage.$eval('div > div > div > div > p', text => text.textContent);
      dataObj['paragraph_2'] = await newPage.$eval('div > div > div > div > p ~ p', text => text.textContent);
      resolve(dataObj);
      await newPage.close();
    });
    let currentPageData = []
    for (link in urls) {
      currentPageData.push(await pagePromise(urls[link]))
    }
    return currentPageData
  }
}

module.exports = scraperObject;