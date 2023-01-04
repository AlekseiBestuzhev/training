function showMenu() {
	const out = document.querySelector('.search-bar');
	out.classList.toggle('show-menu');
}
document.querySelector('.burger-button').onclick = showMenu;

function hideStreamIcon() {
	for (let i = 0; i < streamButtons.length; i++) {
		const streamIcon = document.querySelector('.gallery__stream-icon');
		if (streamButtons[0].checked == false) {
			streamIcon.style.opacity = '1';
		}
		else {
			streamIcon.style.opacity = '0';
		}
	}
}
const streamButtons = document.querySelectorAll('.gallery__radio');
for (let i = 0; i < streamButtons.length; i++) {
	streamButtons[i].onclick = hideStreamIcon;
}