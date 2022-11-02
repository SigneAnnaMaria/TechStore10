const signUpDiv = document.querySelector(".signUp");
const logInDiv = document.querySelector(".logIn");



    // ----- Elements and attributes to sign in form.

    const logInForm = document.createElement("form");
    logInForm.setAttribute("class", "logInForm");
    logInDiv.appendChild(logInForm);

    const usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("class", "usernameLabel");
    usernameLabel.innerHTML = "Användarnamn:";
    logInForm.appendChild(usernameLabel);

    const usernameInput = document.createElement("input");
    usernameInput.setAttribute("class", "usernameInput");
    usernameInput.setAttribute("type", "text");
    logInForm.appendChild(usernameInput);

    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("class", "passwordLabel");
    passwordLabel.innerHTML = "Lösenord:";
    logInForm.appendChild(passwordLabel);

    const passWordInput = document.createElement("input");
    passWordInput.setAttribute("class", "passWordInput");
    passWordInput.setAttribute("type", "password");
    logInForm.appendChild(passWordInput);

    const logInBtn = document.createElement("button");
    logInBtn.setAttribute("class", "logInBtn");
    logInBtn.innerHTML = "Logga in";
    logInForm.appendChild(logInBtn);

    const newUserLabel = document.createElement("label");
    newUserLabel.setAttribute("class", "newUserLabel");
    newUserLabel.innerHTML = "Ny här?";
    logInForm.appendChild(newUserLabel);

    const createNewUserBtn = document.createElement("button");
    createNewUserBtn.setAttribute("class", "createNewUserBtn");
    createNewUserBtn.setAttribute("type", "button");
    createNewUserBtn.innerHTML = "Skapa ny användare";
    logInForm.appendChild(createNewUserBtn);
    createNewUserBtn.addEventListener("click", createNewUser);



function createNewUser() {

    logInDiv.style.display = "none";

    // ----- Elements and attributes to sign up form.

    const signUpForm = document.createElement("form");
    signUpForm.setAttribute("class", "signUpForm");
    signUpDiv.appendChild(signUpForm);

    const newUsernameLabel = document.createElement("label");
    newUsernameLabel.setAttribute("class", "newUsernameLabel");
    newUsernameLabel.innerHTML = "Välj användarnamn:";
    signUpForm.appendChild(newUsernameLabel);

    const newUsernameInput = document.createElement("input");
    newUsernameInput.setAttribute("class", "newUsernameInput");
    newUsernameInput.setAttribute("type", "text");
    signUpForm.appendChild(newUsernameInput);

    const newPasswordLabel = document.createElement("label");
    newPasswordLabel.setAttribute("class", "newPasswordLabel");
    newPasswordLabel.innerHTML = "Välj lösenord:";
    signUpForm.appendChild(newPasswordLabel);

    const newPasswordInput = document.createElement("input");
    newPasswordInput.setAttribute("class", "newPasswordInput");
    newPasswordInput.setAttribute("type", "password");
    signUpForm.appendChild(newPasswordInput);

    const newUserBtn = document.createElement("button");
    newUserBtn.setAttribute("class", "newUserBtn");
    newUserBtn.innerHTML = "Skapa ny";
    signUpForm.appendChild(newUserBtn);

    newUser();
    return
}

if (!localStorage.getItem("userCatalogue")) {
    localStorage.setItem("userCatalogue", JSON.stringify("users"))
}

let users = [];

function newUser() {

const getUserCatalogue = JSON.parse(localStorage.getItem("userCatalogue"))
let uNameInput = document.querySelector("newUsernameInput").value
let uPassInput = document.querySelector("newPasswordInput").value
if (uNameInput > 0)
}
