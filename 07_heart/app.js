const greyHeart = document.querySelector(".gray-heart");
const redHeart = document.querySelector(".red-heart");

// console.log(greyHeart);
// console.log(redHeart);

greyHeart.addEventListener("click", () => {
  redHeart.classList.add("animation");
  greyHeart.classList.add("fill-color");
});

redHeart.addEventListener("click", () => {
  redHeart.classList.remove("animation");
  greyHeart.classList.remove("fill-color");
});
