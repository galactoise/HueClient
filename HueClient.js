var hueClient = {
		init: function(controllerUrl){
			this.controllerUrl = controllerUrl;
			
			//define endpoints
			this.rootEndpoint = "/api/";
			this.consumerRootEndpoint = "/api/%s";
			this.lightsByConsumerIdEndpoint = "/api/%s/lights";
		},

		
		get: function(path){
			var uri = controllerUrl + path;
			alert(uri);
			jQuery.ajax({
				type: GET,
				dataType: "json",
				url: uri
			});
		},
		
		getLightsByConsumerId: function(consumerId){
			var path = this.lightsByConsumerIdEndpoint.replace("%s",consumerId);
		}
}