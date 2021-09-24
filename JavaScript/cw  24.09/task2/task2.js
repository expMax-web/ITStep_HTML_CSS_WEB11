// // const form = document.forms;
// // console.log(form);

// const form = document.forms.loginForm;
// console.log(form);

// const loginForm = document.getElementById("loginForm");

// console.log(loginForm);

// const emailRegexp =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   const emailInput

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

// const loginUser = document.getElementByI("login");

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

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginInput = form.login.value;
  const passwordInput = form.password.value;

  const saveUser = { loginInput, passwordInput };

  fetch(`https://developer.mozilla.org`, {
    method: "POST",
    body: JSON.stringify(saveUser),
  });
  console.log(JSON.stringify(saveUser));
});
