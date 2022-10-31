// variable where the products from json is stored
var listOfProducts; 
//gets product-div from index.html och saves it in a variable
const productsList = document.querySelector(".productsContainer");
// gets div from index.html and stores it inside the variable "cartNumb"
const cartNumb = document.querySelector(".cartValue")  
//Empty array where the products are stored in LS
const cart = [];
// A div container where we store our products from cart and make them visible.
const mobileContainer = document.querySelector(".mobileContainer")

// Get products from the json file and store it in a global variable 
function loadProducts() {
    fetch("./products.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}

//If the key "item" is not in LS, this statement creates the key "item" with the value from "cart"
function initSite() {
    loadProducts();
    if (!localStorage.getItem("item")){
        localStorage.setItem("item", JSON.stringify(cart));
    }
    
}

// Uses the loaded products data to create a visible product list on the website 
function addProductsToWebpage() {
    listOfProducts.forEach((product, index) => {
        productsList.innerHTML += `
        <div class="product">
            <h1 class="titleProduct">${product.title}</h1>
            <p class="descriptionProduct">${product.description}</p>
            <img id="img${index}"class="imageProduct" src="${product.image}" alt="${product.title}">
            <h3 class="priceProduct">${product.price} kr</h3>
            <button class="buttonProduct" onclick="addToCart(${index})"><a class="cartInBtn"><i class="fa-solid fa-cart-arrow-down"></i></a>Lägg till i kundvagnen</button>
        </div>
    `;
    });
}

// This function is initiated in shoppingcart.html, and it looks for the key "item" from LS.
//If the number in LS is bigger than 0 we print that number, else we print an empty string.
function initCart() {
    const num = JSON.parse(localStorage.getItem("item")) 
    if (num.length > 0) {
        cartNumb.innerHTML = (num.length)
    } else {
        cartNumb.innerHTML = ""}
}

// This function adds the chosen product to the cart by looping through the list of products from JSON and compares it to the button index.
// If they match, the item is pushed in to the variable newItem, and then returns the updated value to the  key "Item" in LS.
// We then call on the function initCart() to update the number in header-cart.
function addToCart(index) {
    listOfProducts.forEach((product) => { 
        if (listOfProducts.indexOf(product) == index) {
            const newItem = JSON.parse(localStorage.getItem("item"));  
            newItem.push(product); 
            localStorage.setItem("item", JSON.stringify(newItem));
        }
    })
    initCart();
}

// A function that creates elements for each object inside the JSON array and then sets an attribute to each variable.
function createCartProduct() {
    mobileContainer.innerHTML = ""
    const getElementFromLS = JSON.parse(localStorage.getItem("item"));
        getElementFromLS.forEach((product, index) => {
        const mobile = document.createElement("div")
        const img = document.createElement("img")
        const title = document.createElement("h2")
        const price = document.createElement("h5")
        const btn = document.createElement("button")
        const trash = document.createElement("a")
        const trashIcon = document.createElement("i")

        mobile.setAttribute("class", "mobile")
        img.setAttribute("src", product.image)
        img.setAttribute("class", "cartImg")
        title.setAttribute("class", "cartTitle")
        price.setAttribute("class", "cartPrice")
        btn.setAttribute("class", "removeBtn")
        btn.setAttribute("id", index)
        trash.setAttribute("class", "trash")
        trashIcon.setAttribute("class", "fa-regular fa-trash-can")

        // prints out information from the key "item" in LS 
        title.innerHTML = product.title
        price.innerHTML = product.price + " kr"
        btn.innerHTML = "Ta bort"

        // attaches all elements inside the div "mobile"
        mobile.appendChild(img)
        mobile.appendChild(title)
        mobile.appendChild(price)
        mobile.appendChild(btn)
        
        // attaches div "mobile" inside the div "mobileContainer" from shoppingcart.html
        mobileContainer.appendChild(mobile)
        trash.appendChild(trashIcon)
        btn.appendChild(trash)

        btn.addEventListener("click", () => {
            cont(product)
        });

        localStorage.setItem("item", JSON.stringify(getElementFromLS));

    })
    getTotalPrice()
    initCart();
}

const removeFromLS = JSON.parse(localStorage.getItem("itemsInCart"));

function cont(product) {
    const cart = JSON.parse(localStorage.getItem("item"));
    const index = cart.findIndex(item => product.title == item.title)
    cart.splice(index, 1)
    localStorage.setItem("item", JSON.stringify(cart))
    createCartProduct()
    
}  

function getTotalPrice() {

    const totalPrice = document.querySelector(".totalPrice")
    totalPrice.innerHTML = "Din varukorg är tom"
    const getTotalPrice = JSON.parse(localStorage.getItem("item"));
    var sum = 0;
    getTotalPrice.forEach((product) => {
            sum += product.price;
            totalPrice.innerHTML = "Totalt pris: " + sum + " kr";
       })
}


function finish() {
    const cart = JSON.parse(localStorage.getItem("item"))
    if (cart.length > 0) {
        alert("Tack för ditt köp. Välkommen åter!")
        clear()
    } else {
        alert("Din varukorg är tom. Lägg något i varukorgen!")
    }
}

function clear() {
    const buyBtn = document.querySelector(".buyBtn")
    mobileContainer.innerHTML = ""
    const totalPrice = document.querySelector(".totalPrice")
    totalPrice.innerHTML = "Din varukorg är tom"
    cartNumb.innerHTML = ""
    localStorage.removeItem("item")
    buyBtn.style.display = "none"
    
}


// Add your code here, remember to brake your code in to smaller function blocks
// to reduce complexity and increase readability. Each function should have
// an explainetory comment like the one for this function, see row 22.

// TODO: Remove the console.log and these comments when you've read them.
