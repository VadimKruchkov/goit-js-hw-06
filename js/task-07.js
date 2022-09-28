const controlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const rangeFont = (event) => {
  textRef.style.fontSize = event.currentTarget.value + "px";
};

controlRef.addEventListener("input", rangeFont);
