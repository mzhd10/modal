"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");
const show_modal = document.querySelectorAll(".show-modal");
const displayModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const hideModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", displayModal);
}
close_modal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);
