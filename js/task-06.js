const inputRef = document.querySelector("#validation-input");
const numberOfSymbol = inputRef.dataset.length;
function validation(event) {
  if (event.currentTarget.value.length == numberOfSymbol) {
    inputRef.classList.remove("invalid");
    return inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    return inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", validation);
