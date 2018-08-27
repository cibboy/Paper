var menuOpen = false;

function toggleMenu() {
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