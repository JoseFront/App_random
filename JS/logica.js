const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

btnLogin.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
});

btnRegister.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  btnRegister.classList.add("active");
  btnLogin.classList.remove("active");
});
