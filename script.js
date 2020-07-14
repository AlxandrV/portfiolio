// vanilla JavaScript Fullpage
new fullpage('#fullpage', {
	// options here
	ancres :['home', 'project', 'contact']
});

// Function burger active
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
});

// Function disable burger
const disable = document.querySelector('#navLinks');

disable.addEventListener('click', () => {	
	burger.classList.remove('active');
	nav.classList.remove('active');
});
