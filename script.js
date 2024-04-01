const openMenuBtn = document.querySelector(".menu_btn");
const closeMenuBtn = document.querySelector(".btn.close");
const menu = document.querySelector(".open_menu");
const header = document.querySelector(".header");

openMenuBtn.addEventListener("click", () => {
  menu.classList.remove("hide");
})

closeMenuBtn.addEventListener("click", () => {
  menu.classList.add("hide");
})