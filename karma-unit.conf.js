module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'src/app/app.js',
      'src/app/components/order/Order.service.js',
      'src/app/components/accordion/accordion.directive.js',
      'src/app/orderStatus/orderStatus.controller.js',
      'src/app/selectPizza/SelectPizza.controller.js',
      'src/app/main/main.controller.js',

      'spec/unit/*.spec.js'
    ]
  })
};