const container = document.querySelector(".container");
const card = document.querySelector(".card");
const productImage = document.querySelector(".productImage");

//movement mouse sensitive
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / -1;
  let imageIndex;

  //starting from the left to right
  if (xAxis < -800) {
    imageIndex = `Left03`;
  } else if (xAxis < -600) {
    imageIndex = `Left02`;
  } else if (xAxis < -400) {
    imageIndex = `Left01`;
  } else if (xAxis >= -400 && xAxis <= 400) {
    imageIndex = `front`;
  } else if (xAxis <= 800) {
    imageIndex = `Right01`;
  } else if (xAxis <= 1000) {
    imageIndex = `Right02`;
  } else {
    imageIndex = `Right03`;
  }

  productImage.src = `./figure_${imageIndex}.PNG`;
});
// bounce back to front when mouse leaves card
card.addEventListener("mouseleave", (e) => {
  productImage.src = `./figure_front.PNG`;
});
