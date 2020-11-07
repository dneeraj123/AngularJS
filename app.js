(function (){

	'use strict';

	var app=angular.module('lunch',[]);

	app.controller('lunchController',lunchController);

	function lunchController($scope)
	{
		$scope.items=""
		$scope.message="";
		$scope.checkTooMuch= function(){

			if($scope.items=="")
			{
				$scope.message="Please enter data first";
			}
			else
			{
				var items=$scope.items;

				var itemList=items.split(",");

				if(itemList.length<=3)
				{
					$scope.message="Enjoy!";
				}
				else
				{
					$scope.message="Too Much!";
				}
			}
		}
	}

})();

