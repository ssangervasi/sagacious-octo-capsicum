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
	console.log('Configged');
	//Default redirect
	$urlRouterProvider.otherwise('root');
	$stateProvider
		.state('root', {
			url: '/root',
			views: {
				'body': {
					templateUrl: '/body/template.html'
				},
				'header': {
					templateUrl: '/headers/main/template.html'
				},
				'sidebar-left': {
					templateUrl: '/sidebars/left/template.html'
				},
				'sidebar-right': {
					templateUrl: '/sidebars/right/template.html'
				}
			}
		})
		;//End state chain
}
})();

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