exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'spec/e2e/PageObjects.js',
    'spec/e2e/main/Main.controller.spec.js',
    'spec/e2e/orderStatus/OrderStatus.controller.spec.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8888/src/app/',
  jasmineNodeOpts: {
    verbose: true,
    showColors: true
  }
};