setInterval(function() {
	updateTime();
	updateBackground();
}, 1000);

function now() {
	var date = new Date();

	var now = {
		"hours": function() {
			if(date.getUTCHours().toString().length == 1) {
				return "0" + date.getUTCHours();
			}
			else {
				return date.getUTCHours();
			}
		},
		"minutes": function() {
			if(date.getUTCMinutes().toString().length == 1) {
				return "0" + date.getUTCMinutes();
			}
			else {
				return date.getUTCMinutes();
			}
		},
		"seconds": function() {
			if(date.getUTCSeconds().toString().length == 1) {
				return "0" + date.getUTCSeconds();
			}
			else {
				return date.getUTCSeconds();
			}
		}
	}
	
	return now;
}

function rgb() {
	var hours = Math.round((now().hours() / 24) * 255);
	var minutes = Math.round((now().minutes() / 60) * 255);
	var seconds = Math.round((now().seconds() / 60) * 255);
	
	var rgb = {
		"hours": function() {
			return hours;
		},
		"minutes": function() {
			return minutes;
		},
		"seconds": function() {
			return seconds;
		}
	}
	
	return rgb;
}

function updateTime() {
	var divTime = document.querySelector("#time");
	
	var hours = now().hours();
	var minutes = now().minutes();
	var seconds = now().seconds();
	
	divTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function updateBackground() {
	var divBackground = document.querySelector("#background");
	
	divBackground.setAttribute("style", "background-color: rgb(" + rgb().hours() + "," + rgb().minutes() + "," + rgb().seconds() + ")");
}

function zoom() {
	// Nothing yet
}