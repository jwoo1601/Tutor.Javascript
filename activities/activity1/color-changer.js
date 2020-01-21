let dX, dY;
const colorChanger = document.querySelector(".color-changer");
colorChanger.addEventListener("drag", event => {
  colorChanger.style.cursor = "grabbing";

  if (event.clientX != 0) {
    dX = event.clientX;
  }
  if (event.clientY != 0) {
    dY = event.clientY;
  }
});
colorChanger.addEventListener("dragend", event => {
  colorChanger.style.cursor = "grab";

  colorChanger.style.left = `${dX}px`;
  colorChanger.style.top = `${dY}px`;
});

let isColorChanging = false;
let isRotating = false;

function onClickColorChanger() {
  useJavascriptAnimation();
}

function useJavascriptAnimation() {
  if (!isColorChanging && !isRotating) {
    isColorChanging = true;
    isRotating = true;

    const colorChanger = document.querySelector(".color-changer");

    let colorModifier = 0;
    const colorInterval = setInterval(() => {
      if (colorModifier > 1.0) {
        clearInterval(colorInterval);
        isColorChanging = false;
      } else {
        colorChanger.style.backgroundColor = `rgba(${256 *
          colorModifier}, ${64 * colorModifier}, ${128 *
          colorModifier}, ${colorModifier})`;
        colorModifier += 0.01;
      }
    }, 50);

    let angleModifier = 0;
    const rotationInterval = setInterval(() => {
      if (angleModifier > 360) {
        clearInterval(rotationInterval);
        isRotating = false;
      } else {
        colorChanger.style.transform = `rotate(${angleModifier}deg)`;
        angleModifier += 5;
      }
    }, 50);
  }
}

function useCSSAnimation() {
  const colorChanger = document.querySelector(".color-changer");
  colorChanger.classList.add("color-changer-css-effect");
}
