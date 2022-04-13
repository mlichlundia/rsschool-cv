const menu = document.querySelector("nav")
const burger = document.querySelector(".menu__burger")
const list = menu.querySelector("ul")

burger.addEventListener("click", openMenu)
menuPoints.forEach(item => {
	item.addEventListener("click", closeMenu)
})

window.matchMedia("(min-width: 992px)").addEventListener('change', () => list.classList.toggle("menu-open"))

if (window.matchMedia("(min-width: 992px)").matches) {
	list.classList.add("menu-open")
}

function openMenu() {
	if (window.matchMedia("(min-width: 992px)").matches) {
		return
	}
	list.classList.toggle("menu-open")
}

function closeMenu() {
	if (window.matchMedia("(min-width: 992px)").matches) {
		return
	}
	list.classList.remove("menu-open")
}
