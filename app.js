const form = document.querySelector(".form");
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
  //   e.preventDefault();

  // inputs.find(function(input){
  //     return input === "";
  // })

  //   if (firstname.value === "" && lastname.value === "" && email.value === "" && password.value === ""){
  //     firstnameError.textContent = "First name cannot be empty";
  //     firstImg.style.opacity = 100;
  //     lastnameError.textContent = "Last name cannot be empty";
  //     secondImg.style.opacity = 100;
  //     emailError.textContent = "Looks like this is not an email";
  //     thirdImg.style.opacity = 100;
  //     passwordError.textContent = "Password cannot be empty";
  //     fourthImg.style.opacity = 100;
  //  } else if (firstname.value === ""){
  //     firstnameError.textContent = "First name cannot be empty";
  //     firstImg.style.opacity = 100;
  //     if(firstname.value !== ""){
  //         firstnameError.textContent = "";
  //     firstImg.style.opacity = 0;
  //     }
  // }
  //   else if (lastname.value === "") {
  //     lastnameError.textContent = "Last name cannot be empty";
  //     secondImg.style.opacity = 100;
  //   } else if (email.value === "") {
  //     emailError.textContent = "Looks like this is not an email";
  //     thirdImg.style.opacity = 100;
  //   } else if (password.value === "") {
  //     passwordError.textContent = "Password cannot be empty";
  //     fourthImg.style.opacity = 100;
  //   }else{
  //     form.submit = true;
  //   }

  // if (firstname.value === ""){
  //     firstnameError.textContent = "First name cannot be empty";
  //     firstImg.style.opacity = 100;
  //     if(firstname.value !== ""){
  //         firstnameError.textContent = "";
  //     firstImg.style.opacity = 0;
  //     }
  // }
  //   else if (lastname.value === "") {
  //     lastnameError.textContent = "Last name cannot be empty";
  //     secondImg.style.opacity = 100;
  //   } else if (email.value === "") {
  //     emailError.textContent = "Looks like this is not an email";
  //     thirdImg.style.opacity = 100;
  //   } else if (password.value === "") {
  //     passwordError.textContent = "Password cannot be empty";
  //     fourthImg.style.opacity = 100;
  //   }else{
  //     form.submit = true;
  //   }

  firstname.value === ""
    ? ((firstnameError.textContent = "First name cannot be empty"),
      (firstImg.style.opacity = 100))
    : ((firstnameError.textContent = ""), (firstImg.style.opacity = 0));

  lastname.value === ""
    ? ((lastnameError.textContent = "Last name cannot be empty"),
      (secondImg.style.opacity = 100))
    : ((lastnameError.textContent = ""), (secondImg.style.opacity = 0));

    email.value === ""? 
   ( emailError.textContent = "Looks like this is not an email",
   thirdImg.style.opacity = 100) :    ( emailError.textContent = "",
   thirdImg.style.opacity = 0)

   password.value === ""? 
  ( passwordError.textContent = "Password cannot be empty",
  fourthImg.style.opacity = 100) : ( passwordError.textContent = "",
  fourthImg.style.opacity = 0)

});

