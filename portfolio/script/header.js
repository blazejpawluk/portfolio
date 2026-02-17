const closedIcon = document.getElementById('header-closed-icon');
const openIcon = document.getElementById('header-open-icon');
const nav = document.getElementById('menu-nav');

let isMenuOpen = false;

const openMenu = () => {
	isMenuOpen = true;

	nav.classList.remove('hidden');
	openIcon.classList.remove('hidden');

	nav.classList.add('is-open');
	openIcon.classList.add('is-open');

	closedIcon.classList.add('is-closing');
};

const closeMenu = () => {
	isMenuOpen = false;

	nav.classList.remove('is-open');
	openIcon.classList.remove('is-open');

	nav.classList.add('is-closing');
	openIcon.classList.add('is-closing');

	closedIcon.classList.remove('hidden');
	closedIcon.classList.add('is-open');
};

const toggleMenu = () => {
	if (isMenuOpen) {
		closeMenu();
	} else {
		openMenu();
	}
};

closedIcon.addEventListener('click', toggleMenu);
closedIcon.addEventListener('keypress', (e) => { if (e.key == 'Enter')
	toggleMenu();
});
openIcon.addEventListener('click', toggleMenu);
openIcon.addEventListener('keypress', (e) => { if (e.key == 'Enter')
	toggleMenu();
});

nav.addEventListener('animationend', () => {
	if (nav.classList.contains('is-closing')) {
		nav.classList.remove('is-closing');
		nav.classList.add('hidden');
	}
});

openIcon.addEventListener('animationend', () => {
	if (openIcon.classList.contains('is-closing')) {
		openIcon.classList.remove('is-closing');
		openIcon.classList.add('hidden');
	}
});

closedIcon.addEventListener('animationend', () => {
	if (closedIcon.classList.contains('is-closing')) {
		closedIcon.classList.remove('is-closing');
		closedIcon.classList.add('hidden');
	}
});