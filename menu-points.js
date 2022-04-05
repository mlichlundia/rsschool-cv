const menuPoints = document.querySelectorAll(".menu__point")
menuPoints.forEach(item => {
	item.addEventListener("click", e => addActive(e))
})
let currentPoint = document.querySelector(".menu__point")

function addActive(e) {
	currentPoint.classList.remove("is-active")
	currentPoint = e.target.closest("li")
	currentPoint.classList.add("is-active")
}
