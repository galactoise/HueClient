var hueProxyClient = {
		init: function(serviceUrl){
			this.serviceUrl = serviceUrl;
			this.rootEndpoint = "/rest/";
			this.templatesEndpoint = "/rest/templates";
		},
		get: function(path){
			var uri = this.controllerUrl + path;
			console.log("uri: " + uri);
			var request = jQuery.ajax({
				type: "GET",
				dataType: "json",
				url: uri,
				async: false
			});
			
			return request;
		},
};