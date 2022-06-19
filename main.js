'use strict';

// function userSelectNav() {
// 	listNav.forEach(item => item.classList.remove('active'));
// 	this.classList.add('active');
// }

// function userSelectLanguage() {
// 	listLanguage.forEach(item => item.classList.remove('active'));
// 	this.classList.add('active');
// }

function selectActive(listElement) {
	return function() {
		listElement.forEach(item => item.classList.remove('active'));
		this.classList.add('active');
	}
}

function listenerClass(elementClass) {
	const listElement = document.querySelectorAll(elementClass);
	listElement.forEach(item => item.addEventListener('click', selectActive(listElement)))
}
// const listNav = document.querySelectorAll('.nav__item');
// const listLanguage = document.querySelectorAll('.header__language');
// const listSelectService = document.querySelectorAll('.services__picture');

// listNav.forEach(item => item.addEventListener('click', userSelectNav));
// listLanguage.forEach(item => item.addEventListener('click', userSelectLanguage));

listenerClass('.header__language');
listenerClass('.nav__item');
listenerClass('.services__picture');