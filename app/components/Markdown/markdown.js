'use strict';

/**
 * @ngdoc directive
 * @name MatchCalendarApp.directive:markdown
 * @description
 * # markdown
 */
angular.module('MatchCalendarApp')
    .factory('markdownConverter', function() {
        return SnuOwnd.getParser();
    })
    .directive('markdown', function (markdownConverter, $sanitize) {
        return {
            scope: {
                content: '='
            },
            restrict: 'EA',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.content, function () {
                    element.html($sanitize(markdownConverter.render(scope.content)));
                    element.find('a').attr('target', '_blank');
                });
            }
        };
    });