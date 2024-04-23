const container = document.querySelector(".container");
const card = document.querySelector(".card");
const productImage = document.querySelector(".productImage");

//movement mouse sensitive
container.addEventListener("mousemove", (e) => {
  let xAxis = window.innerWidth / 2 - e.pageX;
  console.log(xAxis);
  if (xAxis > 100) {
    productImage.src = `./figure_Left.PNG`;
  } else if (xAxis < -100) {
    productImage.src = `./figure_Right.PNG`;
  } else if (xAxis >= -100 || xAxis <= 100) {
    productImage.src = `./figure_front.PNG`;
  }
});
