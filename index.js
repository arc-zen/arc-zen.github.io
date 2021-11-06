function copyContacts(c) {
	navigator.clipboard.writeText(c);
}
document.getElementById('cc').addEventListener('click', function (event) {
    console.log("copied successfully");
    copyContacts("arczen#7561");
    cc.innerHTML = "Copied!";
	setTimeout(function () {
		cc.innerHTML = "Contact";
	}, 1000);
})