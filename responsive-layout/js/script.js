function showMenu() {
	const out = document.querySelector('.search-bar');
	out.classList.toggle('show-menu');
}
document.querySelector('.burger-button').onclick = showMenu;

function hideStreamIcon() {
	const streamIcon = document.querySelector('.gallery__stream-icon');
	streamIcon.style.display = 'none';
}