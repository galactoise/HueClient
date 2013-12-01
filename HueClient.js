var hueClient = {
		init: function(controllerUrl){
			this.controllerUrl = controllerUrl;
			
			//define endpoints
			this.rootEndpoint = "/api/";
			this.consumerRootEndpoint = "/api/%s";
			this.lightsByConsumerId = "/api/%s/lights";
		}
}