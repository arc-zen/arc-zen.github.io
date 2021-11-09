function copyContacts(c) {
	navigator.clipboard.writeText(c);
}
// document.getElementById('cc').addEventListener('click', function (event) {
//     console.log("copied successfully");
//     copyContacts("arczen#7561");
//     cc.innerHTML = "Copied!";
// 	setTimeout(function () {
// 		cc.innerHTML = "Contact";
// 	}, 1000);
// })
// on hover, set opacity to 0 with transition, then change text, then change back to 1 opacity.
// $("#name").addEventListener("mouseover", function(event) {
// 	var name = document.getElementById("name")
// 	name.innerHTML = "arczen#7561"
// 	setTimeout(() => {
// 		setTimeout(() => {
// 			name.innerHTML = "&lt;/arczen>"
// 		}, 3000)
// 	}, 3000)
// })
// $("#name").mouseenter(function() {
// 	$("#name").fadeTo(2000, 0, function() {
// 		$("#name").text("arczen#7561")
// 		$("#name").stop().hide().fadeTo(2000, 1)
// 	})
// })
// $("#name").mouseleave(function() {
// 	$("#name").fadeTo(2000, 0, function() {
// 		$("#name").text("</arczen>")
// 		$("#name").stop().hide().fadeTo(2000, 1)
// 	})
// })
// $.keyframe.define([{
//     name: 'nord-rainbow-cycle',
// 	"16.6%": { "color": "#bf616a" },
// 	"33.2%": { "color": "#d08770" },
// 	"49.8%": { "color": "#ebcb8b" },
// 	"66.4%": { "color": "#a3be8c" },
// 	"83%:": { "color": "#5e81ac" },
// 	"100%": { "color": "#b48ead" },
// }]);
$("#name").click(function () {
	console.info(`clicked on ${$("#name").text()}`);
	$("#name")
		.fadeOut(function () {
			if ($("#name").hasClass("1")) {
				$("#name").addClass("2");
				$("#name").removeClass("1");
				$("#name").text("arczen#7561");
			} else {
				$("#name").addClass("1");
				$("#name").removeClass("2");
				$("#name").text("</arczen>");
			}
		})
		.fadeIn();
});
// random shiz
function pause(milliseconds) {
	var dt = new Date();
	while (new Date() - dt <= milliseconds) {
		/* Do nothing */
	}
}
// emoticons
const emoticonsList = [
	"(*ﾟｰﾟ )ゞ",
	"꒰✩’ω`ૢ✩ ꒱",
	"( ՞ ਊ  ՞)",
	"ヾ( ｏ･ω･)ﾉ",
	"ヽ|･◇･ |ゞ",
	"꒰๑ ᷄ω ᷅꒱",
	"( ͡° ͜ʖ ͡°)",
	"☆ミ",
	"๑(◕‿◕)๑",
	"(；☉_☉)",
	"(˵¯͒n¯͒˵)",
	"ಥ‿ಥ",
	"(o_ _)ﾉ彡☆",
	"(｡ﹷ ‸ ﹷ ✿)",
	"( ◥◣_◢◤ )",
	"(╹∀◠)",
	"╰(°∇≦*)╮",
	"( 〃▽〃)",
];
function changeEmoticon(i = Math.floor(Math.random() * emoticonsList.length)) {
	$("#emoticon")
		.fadeOut(function () {
			$("#emoticon").text(emoticonsList[i]);
		})
		.fadeIn();
}
var emoticonLoop = setInterval(function () {
	changeEmoticon();
}, 15000);
$("#emoticon").click(function () {
	changeEmoticon();
});
// typewriter
const twl = [
	"Developer.",
	"Graphics Designer.",
	"Explorer.",
	"Student.",
	"Dreamer.",
	"Extravagant.",
	"Fruity",
	"",
];
function typingEffect(element, speed) {
	let text = twl[Math.floor(Math.random() * twl.length)];
	element.innerHTML = "> ";
	var i = 0;
	var timer = setInterval(function () {
		if (i < text.length) {
			element.append(text.charAt(i));
			i++;
		} else {
			clearInterval(timer);
		}
	}, speed);
}
typingEffect(document.getElementById("typewriterText"), 150);
setInterval(() => {
	typingEffect(document.getElementById("typewriterText"), 150);
}, 5000);
// $("#typewriterText").on("load", function() {
// 	const _text = ["Programmer.", "Graphics Designer", "Student.", "Gamer."]
// 	while (i = 0, i < _text.length) {
// 		typeWriter(_text[i])
// 		pause(5000)
// 		$("#typewriterText").fadeOut(function() {
// 			$("#typewrtierText").text("")
// 		}).fadeIn();
// 		i++
// 	}

// })
