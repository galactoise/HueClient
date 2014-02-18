var hueProxyClient = {
		init: function(serviceUrl){
			this.serviceUrl = serviceUrl;
			this.rootEndpoint = "/rest/";
			this.templatesEndpoint = "/rest/templates";
		}
};