/* -- Application declaration emancipation proclamation demonstration defenstration ruination -- */
(function () {
angular
	.module('srsApp', ['ui.router'])
	.config(configBlock)
	;//End module chain	

configBlock.$inject = [
	'$stateProvider', 
	'$urlRouterProvider'
];
function configBlock($stateProvider, $urlRouterProvider) {
	//Default redirect
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('root', {
			url: '/',
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
				},
				'footer': {
					templateUrl: '/footers/main/template.html'
				}
			}
		})
		.state('root.resume', {
			url: 'resume',
			views: {
				'body@': {
					templateUrl: '/body/resume/template.html'
				},
				'header@': {
					templateUrl: '/headers/main/template.html'
				}
			}
		})
		;//End state chain
}
})();