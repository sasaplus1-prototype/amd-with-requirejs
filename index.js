(function(){

  'use strict';

  var vm;

  requirejs.config({
    baseUrl: './',
    paths: {
      knockout: [
        '//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min'
      ]
    }
  });

  require(['knockout'], function(ko) {
    function ViewModel() {
      this.items = ko.observableArray([]);
    }

    vm = new ViewModel;

    ko.applyBindings(vm);
  });

  require(['knockout', 'a'], function(ko, a) {
    vm.items.push({
      result: JSON.stringify(a, null, 2)
    });
  });
  require(['knockout', 'b'], function(ko, b) {
    vm.items.push({
      result: JSON.stringify(b, null, 2)
    });
  });
  require(['knockout', 'c'], function(ko, c) {
    vm.items.push({
      result: JSON.stringify(c, null, 2)
    });
  });

}());
