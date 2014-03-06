'use strict';

describe('Controller: ApplyCtrl', function () {

  // load the controller's module
  beforeEach(module('hackeduApp'));

  var ApplyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplyCtrl = $controller('ApplyCtrl', {
      $scope: scope
    });
  }));

  it('should attach an empty user object to the scope', function () {
    expect(scope.user).toEqual({});
  });

  it('should attach an empty application object to the scope', function () {
    expect(scope.application).toEqual({});
  });

  it('should attach a registrationForm object to the scope', function () {
    scope.user.firstName = 'John';
    scope.application.reason = 'Foo';

    scope.$apply();

    expect(scope.registrationForm).toEqual({
      user: {
        firstName: 'John'
      },
      application: {
        reason: 'Foo'
      }
    });
  });

  it('should successfully post valid form', function () {});
  it('should unsuccessfully post invalid form', function () {});
});
