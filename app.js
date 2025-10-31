
const btn = document.querySelector(".btn");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errorMsg = document.querySelector(".error-msg");
const firstnameError = document.querySelector(".firstname-error");
const lastnameError = document.querySelector(".lastname-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const firstImg = document.querySelector(".first-img");
const secondImg = document.querySelector(".second-img");
const thirdImg = document.querySelector(".third-img");
const fourthImg = document.querySelector(".fourth-img");

btn.addEventListener("click", function () {

  firstname.value === ""
    ? ((firstnameError.textContent = "First name cannot be empty"),
      (firstImg.style.opacity = 100),
      (firstname.style.border = "1px solid hsl(0, 100%, 74%)"))
    : ((firstnameError.textContent = ""),
      (firstImg.style.opacity = 0),
      (firstname.style.border = "1px solid hsla(246, 25%, 77%, 0.356)"));

  lastname.value === ""
    ? ((lastnameError.textContent = "Last name cannot be empty"),
      (secondImg.style.opacity = 100),
      (lastname.style.border = "1px solid hsl(0, 100%, 74%)"))
    : ((lastnameError.textContent = ""),
      (secondImg.style.opacity = 0),
      (lastname.style.border = "1px solid hsla(246, 25%, 77%, 0.356)"));

  email.value === ""
    ? ((emailError.textContent = "Looks like this is not an email"),
      (thirdImg.style.opacity = 100),
      (email.style.border = "1px solid hsl(0, 100%, 74%)"))
    : ((emailError.textContent = ""),
      (thirdImg.style.opacity = 0),
      (email.style.border = "1px solid hsla(246, 25%, 77%, 0.356)"));

  password.value === ""
    ? ((passwordError.textContent = "Password cannot be empty"),
      (fourthImg.style.opacity = 100),
      (password.style.border = "1px solid hsl(0, 100%, 74%)"))
    : ((passwordError.textContent = ""),
      (fourthImg.style.opacity = 0),
      (password.style.border = "1px solid hsla(246, 25%, 77%, 0.356)"));
});
