function mobileNav() {
	const burgerMenu = document.querySelector(".header__burger");
	const menu = document.querySelector("#menu");

	burgerMenu.addEventListener('click', () => {
		burgerMenu.classList.toggle("open");
		menu.classList.toggle("open");
	})
}

export default mobileNav;