const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function createName() {
  output.textContent = input.value || "Anonymous";
}

input.addEventListener("input", createName);
