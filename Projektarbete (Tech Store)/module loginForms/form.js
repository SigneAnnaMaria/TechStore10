
// ----- gets divs from index.html och saves it in a variable
const signUpDiv = document.querySelector(".signUp");
const logInDiv = document.querySelector(".logIn");

// ----- where all of the new users stored

const users = [];

// ----- stores the empty key "userCatalogue" in LS

if (!localStorage.getItem("userCatalogue")) {
    localStorage.setItem("userCatalogue", JSON.stringify(users))
}

// ----- DEFAULT - Elements and attributes to sign in form.

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

// ----- function that creates the signUpForm in innerhtml and makes it posible to create new user

function createNewUser() {

    logInDiv.style.display = "none";
    signUpDiv.style.display = "block";

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
    newUserBtn.setAttribute("type", "button");
    newUserBtn.innerHTML = "Skapa ny";
    signUpForm.appendChild(newUserBtn);
    newUserBtn.addEventListener("click", newUser);

    const newUserBlanc = document.createElement("p");
    newUserBlanc.setAttribute("class", "newUserBlanc");
    signUpForm.appendChild(newUserBlanc);

    const goBack = document.createElement("button")
    goBack.setAttribute("class", "goBackBtn");
    goBack.setAttribute("type", "button");
    goBack.innerHTML = "Tillbaka";
    signUpForm.appendChild(goBack);
    goBack.style.display = "none";

    // ----- function that stores the new user in the variable "users"-array

    function newUser() {
        const username = document.querySelector(".newUsernameInput").value;
        const password = document.querySelector(".newPasswordInput").value;
        const getUserCatalogue = JSON.parse(localStorage.getItem("userCatalogue"))

        if (username.length && password.length > 0) {
            getUserCatalogue.push ({username: username, password: password});
            localStorage.setItem("userCatalogue", JSON.stringify (getUserCatalogue));
            newUserBlanc.innerHTML = "Nu kan du logga in..."
            username.innerHTML = ""
            password.innerHTML = ""
            newUsernameLabel.style.display = "none";
            newUsernameInput.style.display = "none";
            newPasswordLabel.style.display = "none";
            newPasswordInput.style.display = "none";
            newUserBtn.style.display = "none";
            goBack.style.display = "block"
            goBack.addEventListener("click", logInFunction);
            } else {
            newUserBlanc.innerHTML = "Du måste ange nytt namn och lösenord..."
        }
    }
}



// ----- function that take us back to the logInForm

function logInFunction () {
    logInDiv.style.display = "block";
    signUpDiv.style.display = "none";
    createNewUserBtn.style.display = "none";
    newUserLabel.style.display = "none";
}
