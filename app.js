const container = document.querySelector(".container");
const card = document.querySelector(".card");
const productImage = document.querySelector(".productImage");

//movement mouse sensitive
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / -1;
  let imageIndex;
  let xAxisPercentage = (xAxis / window.innerWidth) * 100;
  console.log(xAxisPercentage);
  //starting from the left to right
  if (xAxisPercentage < -35) {
    imageIndex = `Left03`;
  } else if (xAxisPercentage < -30) {
    imageIndex = `Left02`;
  } else if (xAxisPercentage < -25) {
    imageIndex = `Left01`;
  } else if (xAxisPercentage >= -25 && xAxis <= 25) {
    imageIndex = `front`;
  } else if (xAxisPercentage <= 30) {
    imageIndex = `Right01`;
  } else if (xAxisPercentage <= 35) {
    imageIndex = `Right02`;
  } else {
    imageIndex = `Right03`;
  }

  productImage.src = `./figure_${imageIndex}.PNG`;
});
