var it = " ";
function user() {
	var it = info.value
	window.alert(it);
	localStorage.setItem("name",it);
}

function user2() {
	var hana = localStorage.getItem('name');
	window.alert(hana);
	location.href="two.html";
}