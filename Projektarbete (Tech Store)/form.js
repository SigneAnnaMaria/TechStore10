// Get elements from login.html
const signUp = document.querySelector(".signUp")
const logIn = document.querySelector(".logIn")




//elements and attributes to login form.
const signUpForm = document.createElement("form")
const pickUN = document.createElement("label")
const newUN = document.createElement("input")
const pickPW = document.createElement("label")
const newPW = document.createElement("input")
const submitNew = document.createElement("button")

signUpForm.setAttribute("class", "signUpForm")
pickUN.setAttribute("class", "pickUN")
newUN.setAttribute("class", "newUN")
newUN.setAttribute("type", "text")
pickPW.setAttribute("class", "pickPW")
newPW.setAttribute("class", "newPW")
newPW.setAttribute("type", "password")
submitNew.setAttribute("class", "submitNew")

pickUN.innerHTML = "Välj användarnamn:"
pickPW.innerHTML = "Välj lösenord:"
submitNew.innerHTML = "Skapa ny"

signUp.appendChild(signUpForm)
signUpForm.appendChild(pickUN)
signUpForm.appendChild(newUN)
signUpForm.appendChild(pickPW)
signUpForm.appendChild(newPW)
signUpForm.appendChild(submitNew)

//elements and attributes to sign up form.
const logInForm = document.createElement("form")
const writeUN = document.createElement("label")
const username = document.createElement("input")
const writePW = document.createElement("label")
const passWord = document.createElement("input")
const submitLogIn = document.createElement("button")
const newUser = document.createElement("label")
const newUserBtn = document.createElement("button")

logInForm.setAttribute("class", "logInForm")
writeUN.setAttribute("class", "writeUN")
username.setAttribute("class", "username")
username.setAttribute("type", "text")
writePW.setAttribute("class", "writePW")
passWord.setAttribute("class", "passWord")
passWord.setAttribute("type", "password")
submitLogIn.setAttribute("class", "submitLogIn")
newUser.setAttribute("class", "newUser")
newUserBtn.setAttribute("class", "newUserBtn")

writeUN.innerHTML = "Användarnamn:"
writePW.innerHTML = "Lösenord:"
submitLogIn.innerHTML = "Logga in"
newUser.innerHTML = "Ny här?"
newUserBtn.innerHTML = "Skapa ny användare"
signUp.style.display = "none"

logIn.appendChild(logInForm)
logInForm.appendChild(writeUN)
logInForm.appendChild(username)
logInForm.appendChild(writePW)
logInForm.appendChild(passWord)
logInForm.appendChild(submitLogIn)
logInForm.appendChild(newUser)
logInForm.appendChild(newUserBtn)






