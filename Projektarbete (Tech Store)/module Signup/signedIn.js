// const signedInDiv = document.querySelector(".signedIn")

// // ----- Main box to store my child divs

// const elementContainer = document.createElement("div")
// elementContainer.setAttribute("class", "signed--elementContainer")


// // ----- First div containing greeting of user #

// const userInfo = document.createElement("div")
// userInfo.setAttribute("class", "signed--userInfo")

// const h2 = document.createElement("h2")
// h2.setAttribute("class", "signed--h2")

// const btn = document.createElement("button")
// btn.setAttribute("class", "signed--btn")
// btn.innerHTML = "Logga ut"
// btn.addEventListener("click", logOutFunction)

// elementContainer.appendChild(userInfo)
// userInfo.appendChild(h2)
// userInfo.appendChild(btn)


// // ----- divider between the two main divs
// const lines = document.createElement("div")
// lines.setAttribute("class", "lines")

// elementContainer.appendChild(lines)


// // ----- second div container
// const purchaseHistory = document.createElement("div")
// purchaseHistory.setAttribute("class", "signed--purchaseHistory")

// const h4 = document.createElement("h4")
// h4.setAttribute("class", "signed--h4")
// h4.innerHTML = "Köp historik"

// // const purchase = document.createElement("div")
// // purchase.setAttribute("class", "signed--purchase")

// elementContainer.appendChild(purchaseHistory)
// purchaseHistory.appendChild(h4)
// // purchaseHistory.appendChild(purchase)

// // ----- Attaches my main div containing its children to its parent div in the login.html-file

// signedInDiv.appendChild(elementContainer)

// // ----- Function that shows signedInDiv in html and gets the logedIn "orderHistory" from LS

// function signedInUI() {
//     document.querySelector(".formContainer").style.display = "none"
//     signedInDiv.style.display = "block";
//     h2.innerHTML = "Välkommen " + JSON.parse (localStorage.getItem ("logedIn"));
//     getOrderHistory()
// }

// // ----- Function that prints out all orderhistory on the user thats logged in

// function getOrderHistory() {
//     const orders = JSON.parse(localStorage.getItem("orders"))
//     const logedInName = JSON.parse(localStorage.getItem("logedIn"))

//     orders.forEach((orderHistory, index) => {

//         if (orderHistory.username == logedInName) {
//             const purchase = document.createElement("div")
//             purchase.setAttribute("class", "signed--purchase")
//             const ul = document.createElement("ul")
//             ul.innerHTML = "Ordernummer: " + (index +1) // <----- Have to fix that nr 
//             const order = orderHistory.products

//             order.forEach(product => {
//                 const title = document.createElement("h4")
//                 const description = document.createElement("p")
//                 const price = document.createElement("p")
//                 const totalPrice = document.createElement("p")
//                 // var sum = 0;
//                 // sum += product.price;
//                 title.innerHTML = "Product: " + product.title
//                 description.innerHTML = product.description
//                 price.innerHTML ="Price: " + product.price
//                 // console.log(sum)
//                 // totalPrice.innerHTML = "Totalt pris: " + sum + " kr";
//                 ul.appendChild(title)
//                 ul.appendChild(description)
//                 ul.appendChild(price)
//                 ul.appendChild(totalPrice)
//                 purchase.appendChild(ul)
//                 purchaseHistory.appendChild(purchase)
//             }) 
//         }
//     });
// }

// // ----- function that logs out the user and removes the"logedIn" key from LS

// function logOutFunction() {
//     document.querySelector(".formContainer").style.display = "block"
//     localStorage.removeItem ("logedIn");
//     logInDiv.style.display = "block";
//     signUpDiv.style.display = "none";
//     signedInDiv.style.display = "none";
// }