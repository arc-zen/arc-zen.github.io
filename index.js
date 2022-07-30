function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// if (!!Cookies.get("theme")) {
// 	Cookies.set("theme", "light");
// } else {
// 	if (Cookies.get("theme") == "dark") {
// 		document.documentElement.style.setProperty("--bg", "#111");
// 		document.documentElement.style.setProperty("--fc", "#fff");
// 		document.getElementById("theme-icon").src = "img/light_mode.svg";
// 	} else if (Cookies.get("theme") == "light") {
// 		document.documentElement.style.setProperty("--bg", "#fff");
// 		document.documentElement.style.setProperty("--fc", "#111");
// 		document.getElementById("theme-icon").src = "img/dark_mode.svg";
// 	}
// }
function diff() {
	let a = (Math.round(Date.now() - 1659148744284) / 86400000).toFixed(1);
	let b = numberWithCommas(Date.now() - 1659148744284);
	return `for ${a} days || (${b} ms)`;
}
function get_timer() {
	const timer = document.createElement("p");
	timer.setAttribute("id", "construction-timer");
	timer.classList.add("construction-text");
	timer.innerHTML = diff();
	return timer;
}
function timer(timer) {
	document.getElementById("construction").appendChild(get_timer());
}

setInterval(() => {
	if (document.hasFocus()) {
		if (!!document.getElementById("construction-timer")) document.getElementById("construction-timer").innerHTML = diff();
		else timer(get_timer());
	}
}, 75);

// document.getElementById("theme-icon").onclick = () => {
// 	console.log("[fancy code stuff] theme buttom pressed");
// 	if (Cookies.get("theme") == "dark") {
// 		document.documentElement.style.setProperty("--bg", "#fff");
// 		document.documentElement.style.setProperty("--fc", "#111");
// 		scene.background = new THREE.Color(0xffffff);
// 		Cookies.set("theme", "light");
// 		document.getElementById("theme-icon").src = "img/dark_mode.svg";
// 	} else if (Cookies.get("theme") == "light") {
// 		document.documentElement.style.setProperty("--bg", "#111");
// 		document.documentElement.style.setProperty("--fc", "#fff");
// 		scene.background = new THREE.Color(0x000000);
// 		Cookies.set("theme", "dark");
// 		document.getElementById("theme-icon").src = "img/light_mode.svg";
// 	}
// };
