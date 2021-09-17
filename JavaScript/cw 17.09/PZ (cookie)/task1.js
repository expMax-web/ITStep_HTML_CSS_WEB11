// // const form = document.forms;
// // console.log(form);

// const form = document.forms.loginForm;
// console.log(form);

// const loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const loginInput = event.target.elements.login;
//   const passwordInput = event.target.elements.password;

//   fetch("https://learn.javascript.ru/", {
//     method: "post",
//     body: JSON.stringify({
//       login: loginInput.value,
//       password: passwordInput.value,
//     }),
//   });
//   console.log(loginInput.value, passwordInput.value);
// });

// console.log(loginForm);

// const emailRegexp =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   const emailInput

// const form = document.forms.loginForm;

// // const loginUser = document.getElementByI("login");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const loginInput = form.login;
//   const rememberUser = form.remember;
//   return document.body.insertAdjacentHTML(
//     "beforeend",
//     `<span>Привет, ${loginInput.value}! ${
//       rememberUser.checked ? "Я тебя запомнил" : "Я тебя не запомнил"
//     }</span>`
//   );
// });

const form = document.forms.loginForm;
const upperCaseRegexp = /[A-ZА-Я]+/;
const lowerCaseRegexp = /[a-zа-я]+/;
const numberRegexp = /[0-9]/gm;
const emailRegexp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegexp =
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = form.email;
  const passwordInput = form.password;
  const repeatPasswordInput = form.repeatPassword;
  const Emailerror = document.getElementById("emailError");
  if (!emailRegexp.test(emailInput.value)) {
    Emailerror.classList.remove("hidden");
  } else {
    Emailerror.classList.add("hidden");
  }
  const passwordError = document.getElementById("passwordError");
  if (
    !upperCaseRegexp.test(passwordInput.value) ||
    !lowerCaseRegexp.test(passwordInput.value) ||
    !numberRegexp.test(passwordInput.value) ||
    passwordInput.value.length < 6
  ) {
    passwordError.classList.remove("hidden");
  } else {
    passwordError.classList.add("hidden");
  }
  const repeatPasswordError = document.getElementById("repeatPasswordError");
  if (!(repeatPasswordInput.value === passwordInput.value)) {
    repeatPasswordError.classList.remove("hidden");
  } else {
    repeatPasswordError.classList.add("hidden");
  }
});
