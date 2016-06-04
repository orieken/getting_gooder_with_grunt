var Homepage = require('../PageObjects');

describe('Controller: MainController', function(){
  var homepage = new Homepage();
  
  it('should display a welcome message', function(done) {
    homepage.get();
    expect(homepage.pageHeading.getText()).toEqual('Welcome to the Pizza Store!');
    done();
  });
});