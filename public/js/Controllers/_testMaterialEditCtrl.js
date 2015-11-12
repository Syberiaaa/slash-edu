describe('MaterialEditCtrl', function() {
    beforeEach(module('seApp'));

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('test preview', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('MaterialEditCtrl', { $scope: $scope });
        });

        it('ordinal text', function() {

        });

    });
});