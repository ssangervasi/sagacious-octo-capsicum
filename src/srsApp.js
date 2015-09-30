/* -- Application declaration emancipation proclamation demonstration defenstration ruination -- */
(function () {
angular
	.module('srs', ['ui.router'])
	.config(configBlock)
	;//End module chain	

configBlock.$inject = [
	'$stateProvider', 
	'$urlRouterProvider'
];
function configBlock($stateProvider, $urlRouterProvider) {
	//Default redirect
	$urlRouterProvider.otherwise('root');
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
		.state('root', {
			url: '/',
			views: {
				name: 'body',
				//controller: 'bodyController',
				//controllerAs: 'rootCtrl',
				templateUrl: '/body/template.html'
			}
		})
		;//End state chain
}
})();

