describe('unit controller: OrderStatusController', function () {
  describe('PlaceOrder:  ', function () {
    it('navigates to order status page after order is placed', function (done) {
      browser.get('http://localhost:8888/src/app/');

      expect(browser.getLocationAbsUrl()).toBe('/');

      var pizzaTypeOptions = element.all(by.tagName('option'));
      pizzaTypeOptions.get(1).click();

      var selectedPizzaType = element(by.css('option:checked'));
      expect(selectedPizzaType.getText()).toEqual(pizzaTypeOptions.get(0).getText());

      var placeOrderButton = element(by.buttonText('Place Order'));
      placeOrderButton.click();

      expect(browser.getLocationAbsUrl()).toBe('/order-status');
      done()
    });
  });
});