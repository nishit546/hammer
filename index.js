const body = document.querySelector("body");

const right = document.querySelector(".right");
const gift = document.querySelector(".circle");
gift.addEventListener("click", () => {
  right.style.display = "flex ";
  right.style.zIndex = "10";
  right.style.position = "fixed";
  right.style.transition = "all 0.3s ease-in-out";
  body.style.opacity = "0.8";
  
});
body.addEventListener("click",()=>{
  right.style.display = "none";
});
