requirejs.config({
  shim: {
    bootstrap:{"deps":['jquery']},
    conf: {},
    chai: {},
    api: {"deps":['jquery','conf','bootbox']}

  },

  paths: {
    api: 'https://cdn.rawgit.com/45rpm/counterwebdeps/master/js/util.api',
    status: 'vm/status',
    test: 'vm/test',
    tx: 'vm/tx',
    conf: 'js/conf',
    util: 'js/util',
    jquery: 'vendors/jquery/dist/jquery',
    knockout: 'vendors/knockoutjs/dist/knockout',
    pager: 'vendors/pagerjs/pager',
    underscore: 'vendors/underscore/underscore',
    bootstrap: "vendors/bootstrap/dist/js/bootstrap",
    bootbox: "vendors/bootbox/bootbox"
  },
  urlArgs: "bust=" + (new Date()).getTime() //Cache bust!
});

requirejs(['jquery', 'knockout', 'pager','bootstrap', 'bootbox'], function ($, ko, pager, bootstrap, bootbox) {

  var viewModel = {

  };

  window.requireVM = function (moduleName) {
    return function (callback) {
      require([moduleName], function (mod) {
        callback(mod);
      });
    };
  };

  window.requireJson = function (url) {

  };

  window.bootbox = bootbox;

  // withOnShow: requireVM('product')

  $(function () {
    pager.Href.hash = '#!/';
    pager.onBindingError.add(function(event) {
      var page = event.page;
      $(page.element).empty().append('<div class="alert"> Error Loading Page</div>');
      console.log(event);
    });
    pager.extendWithPage(viewModel);

    ko.applyBindings(viewModel);
    pager.start();

  });
});

