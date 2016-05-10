angular.module('main').directive('pageMatrix', function($timeout) {
	return {
		replace: true,
		templateUrl: 'view/templates/pagematrix.html',
		link: function(scope, elem, attrs) {
			$timeout(function(){
				console.log(scope)
				console.log($(elem).find("[sc-id='pageName']"))
			},10);
			//
			//var isHomePage = $(elem).("[sc-id='pageName']")
			/*elem.bind('click', function() {
				elem.css('background-color', 'white');
				scope.$apply(function() {
					scope.color = "white";
				});
			});
			elem.bind('mouseover', function() {
				elem.css('cursor', 'pointer');
			});*/
			/*$('#expList').find('li:has(ul)')
			.click( function(event) {
				if (this == event.target) {
					$(this).toggleClass('expanded');
					$(this).children('ul').toggle('medium');
				}
				return false;
			})
			.addClass('collapsed')
			.children('ul').hide();*/
		}
	};
});
//