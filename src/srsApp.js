/* -- Application declaration emancipation proclamation demonstration defenstration ruination -- */
(function () {
	angular
		.module('srs', ['ui-router'])
		.config(configBlock)
		;//End module chain	
	
	configBlock.$inject = [
		'$stateProvider', 
		'$urlRouterProvider'
	];
	function configBlock($stateProvider, $urlRouterProvider) {
		//Default redirect
		$urlRouterProvider.otherwise('home');
		/**
		 * -- State template --
		 *
		 * .state('parentName.stateName',
		 * 	{
		 *		url: '/stateName,
		 *		templateUrl: 'states/templates/stateName.html,
		 *		controller: 'stateNameController',
		 *		controllerAs: 'stateNameCtrl',
		 *		
		 *
		 *	})
		 *
		 *	Notes:
		 *		- The controller should function should be defined in:
		 *			sates/controllers/stateNameController.js
		 *		- ...
		 */
		$stateProvider
			.state('home', {
				url: '/home',
				controller: 'homeController',
				controllerAs: 'homeCtrl'
			})
			;//End state chain
	}
})();

