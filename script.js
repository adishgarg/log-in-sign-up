const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
// import { gsap } from "gsap";
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  // body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  // body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isOpened) {
    console.log(window.scrollY);
    isOpened = true;
    openModal();
  }
});
window.addEventListener("scroll", () => {
  if ((window.innerHeight + window.scrollY) < document.body.offsetHeight && isOpened) {
    isOpened = false;
    closeModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};