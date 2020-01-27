const rect = document.querySelector("#rect");
const text = document.querySelector("#rect a");
const rectWidth = 300,
  rectHeight = 300;

rect.style.width = `${rectWidth}px`;
rect.style.height = `${rectHeight}px`;
rect.style.boxShadow = "5px 5px 15px 0 rgba(1, 1, 1, 0.5)";
rect.style.border = `5px solid pink`;
text.style.fontSize = "5vw";

let prevColor;

//재사용성을 높이기 위해 파라미터로 받는걸로 한다.
function playAnimation(selector) {
  let element = document.querySelector(selector);
  let alpha = 0.5;

  prevColor = element.style.backgroundColor;

  element.style.backgroundColor = `rgba(42, 187, 155, ${alpha})`;
}

function clearAnimation(selector) {
  let element = document.querySelector(selector);

  element.style.backgroundColor = prevColor;
}

function onContextMenu(e) {
  e.preventDefault();
}
