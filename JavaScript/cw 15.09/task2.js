const form = document.forms.loginForm;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userEmail = form.email;
  return document.body.insertAdjacentHTML(
    "beforeend",
    `<span>На почту ${userEmail.value} отправлено письмо с подтверждением.</span>`
  );
});
