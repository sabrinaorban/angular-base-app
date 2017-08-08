angular
	.module('App')

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
	{
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				name: 'home',
				url: '/',
        controller: 'HomepageController',
        templateUrl: 'app/templates/homepage.html'
				
			})
      .state('mission', {
				name: 'mission',
				url: '/mission',
        controller: 'MissionController',
        templateUrl: 'app/templates/mission.html'
				
			})
      .state('product1', {
				name: 'product1',
				url: '/products/closed-microfluidic-chip?tab',
        controller: 'ProductsController',
        templateUrl: 'app/templates/products/product1.html',
        params: {tab: 'overview'}
			})
		
      
      .state('team', {
				name: 'team',
				url: '/team',
        controller: 'TeamController',
        templateUrl: 'app/templates/team.html'
			})
      .state('careers', {
				name: 'careers',
				url: '/careers',
        controller: 'CareersController',
        templateUrl: 'app/templates/careers.html'
			})
      .state('partners', {
				name: 'partners',
				url: '/partners',
        controller: 'PartnersController',
        templateUrl: 'app/templates/partners.html'
			})
      .state('privacy', {
				name: 'privacy',
				url: '/privacy-and-legal',
        controller: 'PrivacyController',
        templateUrl: 'app/templates/privacy.html'
			})
      .state('contact', {
				name: 'contact',
				url: '/contact',
        controller: 'ContactController',
        templateUrl: 'app/templates/contact.html'
			})

			;
	}]);

 
