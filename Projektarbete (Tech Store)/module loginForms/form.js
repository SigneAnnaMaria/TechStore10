
// ----- gets divs from user.html och saves it in a variable
const signUpDiv = document.querySelector(".signUp");
const logInDiv = document.querySelector(".logIn");
const signedIn = document.querySelector(".signedIn")
const formContainer = document.querySelector(".formContainer")
const elementContainer = document.createElement("div")
elementContainer.setAttribute("class", "signed--elementContainer")
const purchaseHistory = document.createElement("div")
    purchaseHistory.setAttribute("class", "signed--purchaseHistory")

// ----- makes sure that the "signedIn.js" file fetch befor driving the "init" function


// ----- function that keps user logged in

function init() { 
    if (localStorage.getItem ("logedIn")){ 
        success();
    }
}
// ----- where all of the new users stored

const users = [
    {
        username: "fredrik",
        password: "12345"
    }
];

const orders =[];

// ----- stores the empty key "userCatalogue" in LS

if (!localStorage.getItem("userCatalogue")) {
    localStorage.setItem("userCatalogue", JSON.stringify(users))
}

if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify(orders))
}

// ----- DEFAULT - Elements and attributes to sign in form.

signUpDiv.style.display = "none";
signedIn.style.display = "none";

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
logInBtn.setAttribute("type", "button");
logInBtn.innerHTML = "Logga in";
logInForm.appendChild(logInBtn);
logInBtn.addEventListener("click", logInFunction);

const newUserLabel = document.createElement("label");
newUserLabel.setAttribute("class", "newUserLabel");
newUserLabel.innerHTML = "Ny här?";
logInForm.appendChild(newUserLabel);

const createNewUserBtn = document.createElement("button");
createNewUserBtn.setAttribute("class", "createNewUserBtn");
createNewUserBtn.setAttribute("type", "button");
createNewUserBtn.innerHTML = "Skapa ny användare";
logInForm.appendChild(createNewUserBtn);
createNewUserBtn.addEventListener("click", NewUserForm);

const userBlanc = document.createElement("p");
userBlanc.setAttribute("class", "newUserBlanc");

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

const newUserBlanc = document.createElement("p");
newUserBlanc.setAttribute("class", "newUserBlanc");
signUpForm.appendChild(newUserBlanc);

const goBack = document.createElement("button")
goBack.setAttribute("class", "goBackBtn");
goBack.setAttribute("type", "button");
goBack.innerHTML = "Tillbaka";
signUpForm.appendChild(goBack);
goBack.style.display = "none";

// ----- function that shows the signUpForm in innerhtml

function NewUserForm() {

    logInDiv.style.display = "none";
    signUpDiv.style.display = "block";
    newUserBtn.addEventListener("click", createNewUser);
}

 // ----- function that stores the new user in the variable "users" array

function createNewUser() {
    const getUserCatalogue = JSON.parse(localStorage.getItem("userCatalogue"))

    if (newUsernameInput.value.length && newPasswordInput.value.length > 0) {
        getUserCatalogue.push ({username: newUsernameInput.value, password: newPasswordInput.value});
        localStorage.setItem("userCatalogue", JSON.stringify (getUserCatalogue));
        newUserBlanc.innerHTML = "Nu kan du logga in..."
        newUsernameInput.innerHTML = ""
        newPasswordInput.innerHTML = ""
        newUsernameLabel.style.display = "none";
        newUsernameInput.style.display = "none";
        newPasswordLabel.style.display = "none";
        newPasswordInput.style.display = "none";
        newUserBtn.style.display = "none";
        goBack.style.display = "block"
        goBack.addEventListener("click", backToLogin);
        } else {
        newUserBlanc.innerHTML = "Du måste ange nytt namn och lösenord..."
    }
}

// ----- function that take you back to the logInForm

function backToLogin () {
    logInDiv.style.display = "block";
    signUpDiv.style.display = "none";
    createNewUserBtn.style.display = "none";
    newUserLabel.style.display = "none";
}

// ----- login function that compares user input with the array from LS

function logInFunction () {
    const getUserCatalogue = JSON.parse (localStorage.getItem ("userCatalogue"));
    for (const user of getUserCatalogue) {
        if (usernameInput.value == user.username && passWordInput.value == user.password) {
            localStorage.setItem ("logedIn", JSON.stringify (usernameInput.value));
            success ();
            return;
        }
    }
    faild ();
    
}


// ----- function starts if "logInFunction()"" succeed

function success () {
    signedIn.style.display = "block";
    logInDiv.style.display = "none";
    signUpDiv.style.display = "none";

    // ----- Main box to store my child divs

    elementContainer.innerHTML = ""

    // ----- First div containing greeting of user #

    const userInfo = document.createElement("div")
    userInfo.setAttribute("class", "signed--userInfo")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "signed--h2")

    // h2.innerHTML = ""
    h2.innerHTML = "Välkommen " + JSON.parse (localStorage.getItem ("logedIn"));

    const btn = document.createElement("button")
    btn.setAttribute("class", "signed--btn")
    btn.innerHTML = "Logga ut"
    btn.addEventListener("click", logOutFunction)

    elementContainer.appendChild(userInfo)
    userInfo.appendChild(h2)
    userInfo.appendChild(btn)


    // ----- divider between the two main divs
    const lines = document.createElement("div")
    lines.setAttribute("class", "lines")

    elementContainer.appendChild(lines)


    // ----- second div container
    

    const h4 = document.createElement("h4")
    h4.setAttribute("class", "signed--h4")
    h4.innerHTML = ""
    h4.innerHTML = "Köp historik"
    

    // const purchase = document.createElement("div")
    // purchase.setAttribute("class", "signed--purchase")

    elementContainer.appendChild(purchaseHistory)
    purchaseHistory.appendChild(h4)
    // purchaseHistory.appendChild(purchase)

    // ----- Attaches my main div containing its children to its parent div in the login.html-file

    signedIn.appendChild(elementContainer)


    signedInUI()
}

function signedInUI() {
    formContainer.style.display = "none"

    getOrderHistory()
}

// ----- Function that prints out all orderhistory on the user thats logged in

function getOrderHistory() {
    const orders = JSON.parse(localStorage.getItem("orders"))
    const logedInName = JSON.parse(localStorage.getItem("logedIn"))
    
    orders.forEach((orderHistory, index) => {
        
        if (orderHistory.username == logedInName) {
            const ul = document.createElement("ul")
            ul.innerHTML = "Slutsumma: " + (orderHistory.totalPrice) // <----- Have to fix that nr 
            const purchase = document.createElement("div")
            purchase.setAttribute("class", "signed--purchase")
            const order = orderHistory.products

            order.forEach(product => {
                const title = document.createElement("h4")
                const description = document.createElement("p")
                const price = document.createElement("p")
                const totalPrice = document.createElement("p")
                // var sum = 0;
                // sum += product.price;
                title.innerHTML = "Product: " + product.title
                description.innerHTML = product.description
                price.innerHTML ="Price: " + product.price
                // console.log(sum)
                // totalPrice.innerHTML = "Totalt pris: " + sum + " kr";
                ul.appendChild(title)
                ul.appendChild(description)
                ul.appendChild(price)
                ul.appendChild(totalPrice)
                purchase.appendChild(ul)
                purchaseHistory.appendChild(purchase)
                // return;
            }) 
        }
            // console.log ("tom")
            // purchase.innerHTML = "Du har inga tidigare köp"
        
    });
}

function faild () {
    userBlanc.innerHTML = "Användarnamn eller lösenord finns inte. Försök igen";
    logInForm.appendChild(userBlanc);
}

function logOutFunction() {
    purchaseHistory.innerHTML = ""
    formContainer.style.display = "block"
    localStorage.removeItem ("logedIn");
    logInDiv.style.display = "block";
    signUpDiv.style.display = "none";
    signedIn.style.display = "none";
}


