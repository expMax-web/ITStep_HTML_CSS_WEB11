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

const form = document.forms.loginForm;

// const loginUser = document.getElementByI("login");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginInput = form.login;
  const rememberUser = form.remember;
  return document.body.insertAdjacentHTML(
    "beforeend",
    `<span>Привет, ${loginInput.value}! ${
      rememberUser.checked ? "Я тебя запомнил" : "Я тебя не запомнил"
    }</span>`
  );
});
