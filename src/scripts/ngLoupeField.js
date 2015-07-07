/**
*
* Made by jcagarcia and licensed under MIT license
*
*/
(function(angular){

	var module = angular.module("ngLoupeField", []);

  	function fnNgLoupeFieldDirective(){
    	return {
      		restrict: "E",
      		controller: fnNgLoupeFieldController,
      		replace: true,
      		template: function(element, attrs){
      			return '<div class="ngLoupeField">\
				          <input\
				            type="text"\
				            placeholder="'+attrs.placeholder+'"\
				            class="'+attrs.class+'"\
				            id="'+attrs.id+'" />\
				            <span>Buscar</span>\
				        </div>';
      		}
	        
    	};
  	}

  	function fnNgLoupeFieldController($scope){

  	}



  	fnNgLoupeFieldController.$inject = ["$scope"];
  	module.directive("ngLoupeField", fnNgLoupeFieldDirective);
}(angular));
