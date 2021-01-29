let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordD = document.getElementById("password2");

function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerHTML = message;
}

function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//getFieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check required fields
function formValidate(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function handleSubmit(event) {
  event.preventDefault();
  formValidate([username, email, password, passwordD]);
}
// Event listeners
let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
