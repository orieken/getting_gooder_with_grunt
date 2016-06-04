exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/e2e/PageObject.js', 'spec/e2e/main/MainController.spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8888/src/app/',
  jasmineNodeOpts: {
    verbose: true,
    showColors: true
  }
};