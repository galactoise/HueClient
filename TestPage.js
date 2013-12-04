var currentLights;
var username;
var returnedData;
var lightsContainer;

$(document).ready(function(){
	hueClient.init("http://192.168.1.7:5080");
	username = "newdeveloper";
	
	lightsContainer = $("#lightsContainer");
	
	retrieveFullStateByUsername(username);
});

function retrieveFullStateByUsername(username){
	var request = hueClient.getFullStateByUsername(username);
	request.then(function(data){
		saveCurrentLights(data.lights);
		drawCurrentLights();
	});
}

function retrieveLightsByUsername(username){
	var request = hueClient.getLightsByUsername(username);
	request.then(function(data){
		saveCurrentLightsList(data);
	}).then(function(data){
		
	});
}

function saveCurrentLights(data){
	currentLights = data;
}

function saveCurrentLightsList(data){
	$.each(data, function(key, value){
		if(!currentLights.hasOwnProperty(key)){
			currentLights[key] = value;
		}
	});
}

function drawCurrentLights(){
	var lightsSubcontainer = $(document.createElement('div'));
	$.each(currentLights,function(index,value){
		var newElement = $(document.createElement('div'));
		newElement.attr("id","light_" + index);
		var currentLight = currentLights[index];
		var currentHue = convertHueFromTwoByte(currentLight.state.hue);
		var currentBri = convertBrightnessFromByteToPercentage(currentLight.state.bri);
		var currentSat = convertSaturationFromByteToPercentage(currentLight.state.sat);
//		console.log(convertHueFromTwoByte(currentLights[index].state.hue));
//		console.log(convertSaturationFromByteToPercentage(currentLights[index].state.bri));
//		console.log(convertSaturationFromByteToPercentage(currentLights[index].state.sat));
		var hslString = 'hsl(' + currentHue + ',' + currentSat + ',' + currentBri + ')';
		console.log(hslString);
		newElement.css('background-color',hslString);
		newElement.addClass("square");
		lightsSubcontainer.append(newElement);
	});
	$(lightsContainer).append(lightsSubcontainer);
}

function convertHueFromTwoByte(twoByteHue){
	if(twoByteHue == null || twoByteHue == undefined){
		console.log("No hue defined.");
		return null;
	}else if (twoByteHue == 0){
		return 0;
	}
	return parseInt(twoByteHue / 256);
}

function convertSaturationFromByteToPercentage(saturation){
	if(saturation == null || saturation == undefined){
		console.log("No saturation defined.");
		return null;
	}else if (saturation == 0){
		return '0%';
	}
	var decimal = (saturation / 255);
	var percentage = decimal * 100;
	var percentageInteger = parseInt(percentage);
	return '' + percentageInteger + '%';
}

function convertBrightnessFromByteToPercentage(brightness){
	if(brightness == null || brightness == undefined){
		console.log("No brightness defined.");
		return null;
	}else if (brightness == 0){
		return '0%';
	}
	var decimal = (brightness / 255);
	var percentage = decimal * 100;
	var percentageInteger = parseInt(percentage);
	return '' + percentageInteger + '%';
}
