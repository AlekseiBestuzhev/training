function showMenu() {
	const out = document.querySelector('.search-bar');
	out.classList.toggle('show-menu');
}
document.querySelector('.burger-button').onclick = showMenu;

function changeContent() {
	for (let i = 0; i < streamButtons.length; i++) {
		const streamIcon = document.querySelector('.gallery__stream-icon');
		const imageShow = document.querySelector('.gallery__img');
		if (streamButtons[0].checked) {
			streamIcon.style.opacity = '0';
			imageShow.setAttribute('src', "img/gallery/gallery-image-1.jpg");
		}
		else if (streamButtons[1].checked) {
			streamIcon.style.opacity = '1';
			imageShow.setAttribute('src', "img/gallery/gallery-image-2.jpg");
		}
		else if (streamButtons[2].checked) {
			streamIcon.style.opacity = '1';
			imageShow.setAttribute('src', "img/gallery/gallery-image-3.jpg");
		}
		else if (streamButtons[3].checked) {
			streamIcon.style.opacity = '1';
			imageShow.setAttribute('src', "img/gallery/gallery-image-4.jpg");
		}
	}
}
const streamButtons = document.querySelectorAll('.gallery__radio');
for (let i = 0; i < streamButtons.length; i++) {
	streamButtons[i].onclick = changeContent;
}