/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://travelata.ru',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'travelata'
}
