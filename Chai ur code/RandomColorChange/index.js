//generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF"; //  a string array 0 to 15
  let color = "#"; // #FFFFFF (white color) -> 6 digit
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // hex[i] = hex[0 ... 15]
  }
  return color;
};


// console.log(randomColor());
// console.log(Math.floor(Math.random() * 16));

let intervaId;

const startChangingColor = function () {

  if (!intervaId) {
    intervaId = setInterval(changeBodyColor, 1000);      // setInterval(func , param);
  }

  function changeBodyColor() {
    document.body.style.backgroundColor = randomColor();
  }
}; 

const stopChangingColor = function () {
  clearInterval(intervaId);
  intervaId = null;
};


document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
