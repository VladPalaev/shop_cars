'use strict';

function selectActive(listElements) {
	return function() {
		listElements.forEach(item => item.classList.remove('active'));
		this.classList.add('active');
	}
}

function listerElement(elementClass) {
	const listElements = document.querySelectorAll(elementClass);
	listElements.forEach(item => item.addEventListener('click', selectActive(listElements)));
}

listerElement('.nav__link');
listerElement('.header__language-link');



