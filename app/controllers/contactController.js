angular.module('App').controller('ContactController', [
  '$scope','$http', function ($scope, $http) {

   $(document).ready(function() {

      $('.float-label').each(function() {
        $(this).on('focus', function() {
          $(this).parent('.input-container').addClass('active');
        });
        $(this).on('blur', function() {
          if ($(this).val().length == 0) {
            $(this).parent('.input-container').removeClass('active');
          }
        });
        if ($(this).val() != '') $(this).parent('.input-container').addClass('active');

      });

    });


    $scope.result = 'hidden';
    $scope.resultMessage;
    $scope.formData;

    
    $scope.submit = function(contactForm) {
      $scope.submitted = true;
  

        if (contactForm.$valid) {

            $http({
                method  : 'POST',
                url     : '../../contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)

            }).success(function(data){

                console.log(data);

                if (data.success) { //success comes from the return json object

                  $scope.resultMessage = data.message;
                  $scope.result='bg-success';
                  $scope.formData = {};
                
                  $scope.sent = true;

                } else {

                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';

                }

            });

        };

    };
    
  }
]);