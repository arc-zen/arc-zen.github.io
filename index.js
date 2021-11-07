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
document.getElementById("name").addEventListener("mouseover", function(event) {
	var name = document.getElementById("name")
	name.innerHTML = "arczen#7561"
	setTimeout(() => {name.innerHTML = "&lt;/arczen>"}, 3000)
})