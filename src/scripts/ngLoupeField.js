/*
 * AngularJS directive to include loupe field component in your AngularJS applications!
 * Made by jcagarcia (https://github.com/jcagarcia) and licensed under:
 *
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015 Juan Carlos García del Canto
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(angular) {

  /*
   * Creating new ngLoupeField module where register directives, 
   * services and controllers.
   */
  var module = angular.module("ngLoupeField", []);

  /* 
   * This function returns the DDO (Directive Definition Object) of
   * ngLoupeField.
   */
  function fnNgLoupeFieldDirective($interpolate, ngLoupeFieldService) {
    return {
      restrict: "E",
      replace: true,
      template: function(element, attrs) {
        return $interpolate('<div class="ngLoupeField">\
                <input\
                  type="text"\
                  placeholder="{{placeholder}}"\
                  class="{{class}}"\
                  id="{{id}}" />\
                  <a href="#ngLoupeFieldModal-{{id}}" class="fa fa-search"></a>\
                  <div id="ngLoupeFieldModal-{{id}}" class="ngLoupeFieldModal">\
                    <div>\
                      <a href="#close" title="Close" class="ngLoupeFieldModalClose">X</a>\
                    </div>\
                  </div>\
                </div>')(attrs);
      },
      compile: function(element, attrs, transclude) {
        return function(scope) {
          ngLoupeFieldService.getJSON(attrs.path).success(function(data) {
            
          });
        };
      }

    };
  }

  /*
   * This function returns a service that will be injected on ngLoupeField directive
   */
  function fnNgLoupeFieldService($http) {

    this.getJSON = function(path) {
      var promise = $http.get(path);
      return promise;
    }
  }

  // Injecting dependencies on Directive Definition Object
  fnNgLoupeFieldDirective.$inject = ["$interpolate", "ngLoupeFieldService"];
  // Injecting http service on Service definition
  fnNgLoupeFieldService.$inject = ["$http"];

  // Generating directive ngLoupeField
  module.directive("ngLoupeField", fnNgLoupeFieldDirective);
  // Generating service ngLoupeFieldService
  module.service("ngLoupeFieldService", fnNgLoupeFieldService);

}(angular));