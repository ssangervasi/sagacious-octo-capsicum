(function() {
/**
 * Naviagation directive
 */
angular
	.module('srsApp')
	.directive('srsNavigation', Navigation);

Navigation.$inject = [];
NavigationCtrl.$inject = ['$state'];

function Navigation () {
	return {
		restrict: 'E',
		controller: NavigationCtrl,
		templateUrl: '/sidebars/navigation/navigation.html',
		scope: {},
		bindToController: {
			baseState: '@'
		},
		controllerAs: 'navCtrl'
	};

}

function NavigationCtrl($state) {
	var navCtrl = this;
	navCtrl.states = [];
	// For now, just pulling out all non-abstract states
	angular.forEach($state.get(), function (nextState) {
		if (nextState && !nextState.abstract) {
			navCtrl.states.push(nextState);
		}
	});

}

})();