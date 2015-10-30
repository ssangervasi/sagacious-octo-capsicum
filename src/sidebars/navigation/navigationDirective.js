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
	navCtrl.stateList = ["root", "root.resume"];

}

})();