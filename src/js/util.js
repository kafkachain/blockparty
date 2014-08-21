define(['./conf'], function (conf) {
      console.log('loading util');
      return {
        rpc: function (method, params, result) {
          var request = {};
          request.method = method;
          request.params = params;
          request.id = 1;
          request.jsonrpc = "2.0";
          $.ajax({
            type: "POST",
            url: API_SERVER + "/_api",
            data: request,
            success: function (data, status, jqx) {
              console.log(data);
              result = data;
            },
            dataType: "json"

          });
        }
      }
    }
);