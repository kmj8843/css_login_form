const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signUp");
const loginBtn = document.querySelector("#ssss");
const pwShowHide = document.querySelector(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));
