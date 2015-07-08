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
  function fnNgLoupeFieldDirective($interpolate) {
    return {
      restrict: "E",
      controller: fnNgLoupeFieldController,
      replace: true,
      template: function(element, attrs) {
        return $interpolate('<div class="ngLoupeField">\
                <input\
                  type="text"\
                  placeholder="{{placeholder}}"\
                  class="{{class}}"\
                  id="{{id}}" />\
                  <span class="fa fa-search"></span>\
              </div>')(attrs);
      }

    };
  }

  /* 
   * This function implements ngLoupeField controller
   * with all necessary logic
   */
  function fnNgLoupeFieldController() {

  }

  // Injecting dependencies on Directive Definition Object
  fnNgLoupeFieldDirective.$inject = ["$interpolate"];

  // Generating directive ngLoupeField
  module.directive("ngLoupeField", fnNgLoupeFieldDirective);
}(angular));