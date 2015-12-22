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
	$urlRouterProvider.otherwise('/about');
	$stateProvider
		.state('root', {
			url: '/',
			abstract: true,
			views: {
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
		.state('root.about', {
			data: {
				displayName: 'About'
			},
			url: 'about',
			views: {
				'body@': {
					templateUrl: '/body/template.html'
				}
			}
		})
		.state('root.resume', {
			data: {
				displayName: 'Resume'
			},
			url: 'resume',
			views: {
				'body@': {
					templateUrl: '/body/resume/template.html',
					controller: ['$scope', function ($scope) {
						$scope.courses = [
							["Computer Organization & Design", "Linear Algebra"],
							["Discrete Structures", "Number Theory"],
							["Operating Systems", "Probability"],
							["Analysis of Algorithms", "Abstract Algebra"],
							["Artificial Intelligence", "Differential Equations"],
							["", "Mathematical Biology"],
							["", "Real Analysis"]
						];
					}]
				},
				'header@': {
					templateUrl: '/headers/main/template.html'
				}
			}
		})
		.state('root.playground', {
			data: {
				displayName: 'Playground'
			},
			url: 'playground',
			views: {
				'body@': {
					templateUrl: '/body/playground/template.html'
				},
				'header@': {
					templateUrl: '/headers/playground/template.html'
				}
			}
		})
		;//End state chain
}
})();