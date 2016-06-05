(function () {
  describe('unit controller: SelectPizzaController', function () {
    var $scope, $controller;

    beforeEach(module('pizzaStore'));
    beforeEach(inject(function ($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_('SelectPizzaController', {
        $scope: $scope
      });
    }));

    describe('SelectPizzaController:  ', function () {
      it('is defined', function (done) {
        expect($controller).toBeDefined();
        done();
      })
    });

  });
})();