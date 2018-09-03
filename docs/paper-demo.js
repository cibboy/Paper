var menuOpen = false;

function toggleMenu(state) {
	if (state !== undefined) {
		menuOpen = !state;
	}

	if (menuOpen) {
		document.getElementById('menu').classList.remove('active');
		document.getElementById('menu-toggle').classList.remove('active');
	}
	else {
		document.getElementById('menu').classList.add('active');
		document.getElementById('menu-toggle').classList.add('active');
	}

	menuOpen = !menuOpen;
}

function changeTheme(theme) {
	if (theme == "light") {
		document.getElementById('base-css').setAttribute('href', 'paper-light.css');
		document.getElementById('menu').classList.remove('theme-dark');
		document.getElementById('menu').classList.add('theme-light');
	}
	else if (theme == "dark") {
		document.getElementById('base-css').setAttribute('href', 'paper-dark.css');
		document.getElementById('menu').classList.remove('theme-light');
		document.getElementById('menu').classList.add('theme-dark');
	}
}

function bodyLean(lean) {
	if (lean == "left") {
		document.getElementById('body').classList.remove('lean-right');
		document.getElementById('body').classList.add('lean-left');
	}
	else if (lean == "right") {
		document.getElementById('body').classList.remove('lean-left');
		document.getElementById('body').classList.add('lean-right');
	}
	else if (lean == "center") {
		document.getElementById('body').classList.remove('lean-right');
		document.getElementById('body').classList.remove('lean-left');
	}
}

function justify(justification) {
	if (justification == "left") {
		document.getElementById('body').classList.remove('right');
		document.getElementById('body').classList.remove('center');
		document.getElementById('body').classList.remove('justify');
		document.getElementById('body').classList.add('left');
	}
	else if (justification == "right") {
		document.getElementById('body').classList.remove('left');
		document.getElementById('body').classList.remove('center');
		document.getElementById('body').classList.remove('justify');
		document.getElementById('body').classList.add('right');
	}
	else if (justification == "center") {
		document.getElementById('body').classList.remove('right');
		document.getElementById('body').classList.remove('left');
		document.getElementById('body').classList.remove('justify');
		document.getElementById('body').classList.add('center');
	}
	else if (justification == "justify") {
		document.getElementById('body').classList.remove('right');
		document.getElementById('body').classList.remove('center');
		document.getElementById('body').classList.remove('left');
		document.getElementById('body').classList.add('justify');
	}
}