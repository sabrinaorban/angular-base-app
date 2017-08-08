angular.module('App').controller('HomepageController', [
  '$scope',  function ($scope) {

     

    $scope.slickConfigLoaded = true;

    $scope.slickConfig = {
        enabled: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>',
        draggable: true,
        fade: true,
        dots: true,
        swipe: true,
        controls: false,
        infinite: false,
        event: {
            init: function (event, slick) {
              
              if(slick.currentSlide === 0) {
                  $('.slick-prev').addClass('hidden');
              }
              else {
                  $('.slick-prev').removeClass('hidden');
              }  
            },
            afterChange: function(event, slick, currentSlide, nextSlide) {
              var totalSlides = slick.slideCount;

              if(slick.currentSlide === 0) {
                  $('.slick-prev').addClass('hidden');
              }
              else {
                  $('.slick-prev').removeClass('hidden');
              }

              if(slick.currentSlide === (totalSlides-1)) {
                $('.slick-next').addClass('hidden');
              }
              else {
                  $('.slick-next').removeClass('hidden');
              }
              
            }
        }
    };
    
  }
]);