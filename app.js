const container = document.querySelector(".container");
const card = document.querySelector(".card");
const productImage = document.querySelector(".productImage");


//mouse held to change image
let mouseHeld = false;
let isTouching = false;
container.addEventListener("mousedown",(e)=>{
  mouseHeld = true;
})
container.addEventListener("mouseup",(e)=>{
  mouseHeld=false;
})
container.addEventListener("touchstart",(e)=>{
  isTouching = true;
})
container.addEventListener("touchend",(e)=>{
  isTouching = false;
})
//combine mouseheld with mousemove to make it draggable
container.addEventListener("mousemove",(e)=>{
  if (mouseHeld||isTouching){ let xAxis = (window.innerWidth / 2 - e.pageX) / -1;
  let imageIndex;
  let xAxisPercentage = (xAxis / window.innerWidth) * 100;
 
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
 
 }
  
})


