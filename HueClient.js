var hueClient = {
		init: function(controllerUrl){
			this.controllerUrl = controllerUrl;
			
			//define endpoints
			this.rootEndpoint = "/api/";
			this.fullStateByUsernameEndpoint = "/api/%s";
			this.lightsByUsernameEndpoint = "/api/%s/lights";
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
		
		getLightsByUsername: function(username){
			var path = this.lightsByUsernameEndpoint.replace("%s",username);
			console.log("path: " + path);
			return this.get(path);
		},
		
		getFullStateByUsername: function(username){
			var path = this.fullStateByUsernameEndpoint.replace("%s",username);
			console.log("path: " + path);
			return this.get(path);
		}
};