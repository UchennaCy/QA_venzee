require('ts-node/register');

const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*/*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://6151ﬀ8e4a5f22001701d590.mockapi.io/transactions',
      onRequest: () => {
        //request.headers.auth = "123";
      }
    },
    "AssertWrapper": {
      "require": "codeceptjs-assert"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'testing',
  plugins: {
    allure: {
      "enabled": true
    }
    
  }
}