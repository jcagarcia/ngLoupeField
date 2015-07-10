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

  var module;
  if (!angular) return;

  /*
   * Creating new ngLoupeField module where register directives, 
   * services and controllers.
   */
  module = angular.module("ngLoupeField", []);

  /* 
   * This function returns the DDO (Directive Definition Object) of
   * ngLoupeField.
   */
  function fnNgLoupeFieldDirective($interpolate, ngLoupeFieldService) {
    return {
      restrict: "E",
      replace: true,
      template: function(element, attrs) {

        // Id attribute is required
        if (!attrs.id) {
          console.log("ERROR: ngLoupeField needs a valid id attribute.");
          return;
        }

        // Columns attribute is required
        if (!attrs.columns) {
          console.log("ERROR: ngLoupeField needs a valid columns attribute.");
          return;
        }

        // Validating title attribute
        if (!attrs.title) {
          attrs.title = "Select from list";
        }

        // Generating columns HTML
        var columns = attrs.columns.split(",");
        var htmlColumns = "";
        var htmlColumnsTitles = "";
        for (i in columns) {
          var column = columns[i].trim();
          htmlColumnsTitles += "<td>" + column + " <span ng-click='onClickSort($event)' data-columnField='" + column + "' class='fa fa-sort' style='cursor:pointer;'></span></td>";
          htmlColumns += "<td>{{ x." + column + " }}</td>";
        }

        attrs.htmlColumnsTitles = htmlColumnsTitles;
        attrs.htmlColumns = htmlColumns;

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
                      <h2>{{title}}</h2>\
                      <div class="ngLoupeFieldFilterInput">\
                        <span>Filter: <input ng-model="filterText{{id}}"></span>\
                      </div>\
                      <br/>\
                      <div class="ngLoupeFieldTableContainer">\
                        <table>\
                          <thead>\
                            <tr>\
                              <td></td>\
                             {{htmlColumnsTitles}}\
                            </tr>\
                          </thead>\
                          <tbody>\
                            <tr ng-repeat="x in ngLoupeFieldData{{id}} | filter:filterText{{id}} | orderBy: model.currentOrder">\
                              <td><input ng-click="onSelectElement($event)" type="checkbox" /></td>\
                              {{htmlColumns}}\
                            </tr>\
                          </tbody>\
                        </table>\
                      </div>\
                      <br/>\
                      <input type="submit" class="ngLoupeFieldModalSelectInput" />\
                    </div>\
                  </div>\
                </div>')(attrs);
      },
      compile: function(element, attrs, transclude) {
        return function(scope) {

          // If path attribute was declared
          if (attrs.path) {
            ngLoupeFieldService.getJSON(attrs.path).success(function(data) {
              scope["ngLoupeFieldData" + attrs.id] = data;
            });
            return;
          }

        };
      },
      controller: function($scope) {

        // Generating click action on sort button
        $scope.onClickSort = function($event) {
          var scope = angular.element($event.currentTarget).scope();
          var sortButton = $event.target;
          var fieldToSort = sortButton.dataset.columnfield;

          // Checking and updating sort order
          var className = sortButton.className;
          var nextOrder = "";
          if (className == "fa fa-sort" || className == "fa fa-sort-asc") {
            nextOrder = "+";
            sortButton.setAttribute("class", "fa fa-sort-desc");
          } else if (className == "fa fa-sort-desc") {
            nextOrder = "-";
            sortButton.setAttribute("class", "fa fa-sort-asc");
          }

          if (scope.model) {
            // Getting current sort
            var currentOrder = scope.model.currentOrder;
            var previousOrder = nextOrder == "+" ? "-" : "+";
            var position = currentOrder.indexOf(previousOrder + fieldToSort);
            if (position == -1) {
              currentOrder.push(nextOrder + fieldToSort);
            } else {
              currentOrder[position] = nextOrder + fieldToSort;
            }

          } else {
            scope.model = {};
            scope.model.currentOrder = [nextOrder + fieldToSort];
          }



        }
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