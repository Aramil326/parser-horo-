const browserObject = require('./browser');
const scrapeAll = require('./pageController');


//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scrapeAll(browserInstance).then(obj => { console.log(obj) })





// const dayOfBirth = document.querySelector('.input'),
//   today = document.querySelector('input[value="today"]'),
//   tommorow = document.querySelector('input[value="tommorow"]'),
//   dayAfterTomorrow = document.querySelector('input[value="day-after-tomorrow"]'),
//   submit = document.querySelector('input[type="submit"]')

// submit.addEventListener('click', () => {
//   console.log(dayOfBirth.textContent)
//   console.log(today.checked)
//   console.log(today.tommorow)
//   console.log(today.dayAfterTomorrow)
// })