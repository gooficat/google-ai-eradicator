window.onload = function() {
	console.log("EEEE");
	let loc = window.location.href;
	if (loc.indexOf("+-ai&") == -1) {
		window.location.href = loc.replace("&", "+-ai&");
	}
	console.log(loc);
}
console.log("EEEE");