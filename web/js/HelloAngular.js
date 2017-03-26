var myModule = angular.module("MyModule", []);

//directive 
myModule.directive("hello", function() {
	return {
		restrict: 'AEMC',
		template: '<div> Hello Angular!</div>',
		replace: true
	};
});