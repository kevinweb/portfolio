document.getElementById("hamburger").addEventListener("click", function(){
	document.getElementById("menu-side").classList.toggle("menu-side-active");
	document.getElementById("hamburger").classList.toggle("hamburger-active");
	document.getElementById("main-container").classList.toggle("hamburger-container-active");
});