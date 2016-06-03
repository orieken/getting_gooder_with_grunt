module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
        'spec/unit/*.spec.js'
    ]
  })
};