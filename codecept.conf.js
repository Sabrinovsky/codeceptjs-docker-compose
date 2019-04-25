exports.config = {
  tests: './scenarios/**/*_test.js',
  output: './output',
  timeout:1000000,
  helpers: {
    WebDriver: {
      url: 'https://codecept.io/',
      browser: 'chrome',
      restart:false,
      maximize:true,
      keepCookies:true
    },
    REST:{}
  },
  plugins:{
      allure:{
          enabled:true
      }
  },
  bootstrap: null,
  mocha: {
      reporterOptions:{
          mochaFile:'./result.xml'
      }
  },
  name: 'codeceptjs'
}
