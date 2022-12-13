function showMenu() {
	const out = document.querySelector('.search-bar');
	out.classList.toggle('show-menu');
}
document.querySelector('.burger-button').onclick = showMenu;
