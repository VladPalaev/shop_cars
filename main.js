'use strict';

function userSelectNav() {
	listNav.forEach(item => item.classList.remove('active'));
	this.classList.add('active');
}

function userSelectLanguage() {
	listLanguage.forEach(item => item.classList.remove('active'));
	this.classList.add('active');
}

const listNav = document.querySelectorAll('.nav__item');
const listLanguage = document.querySelectorAll('.header__language')

listNav.forEach(item => item.addEventListener('click', userSelectNav));
listLanguage.forEach(item => item.addEventListener('click', userSelectLanguage));

