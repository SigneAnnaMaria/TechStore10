var listOfProducts;
const productsList = document.querySelector(".productsContainer"); //gets product-div from index.html och saves it in a variable
const cartNumb = document.querySelector(".cartValue") // gets div from index.html and stores it inside the variable "cartValue" 

/** Get products from the json file and store it in a gobal variable */
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


function initSite() {
    loadProducts();
    //If the key "item" is not in LS, this statement creates the key "item" with the value of "cart"
    if (!localStorage.getItem("item")){
        localStorage.setItem("item", JSON.stringify(cart));
    }
    
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    listOfProducts.forEach((product, index) => { //loopen som går igenom varje product
        //hämtar från "product" och lägger in produktobjekten i egna element i våran "productList"-div
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

function initCart() { // loads "onload" in shoppingCart.html to set cart number.
    const num = JSON.parse(localStorage.getItem("item")) // gets key "itemsInCart" fom LS and stores it into a variable "num"
    if (num.length > 0) { // if num length is bigger than 0
        cartNumb.innerHTML = (num.length) // display "num" length (current items in cart in LS) in header
    } else {
        cartNumb.innerHTML = ""}
}

//Empty array where the products are stored in LS
const cart = [];

//Empty array where the number of products are stored in LS
const cartValues = [];

//Function add products to cart
function addToCart(index) {

    listOfProducts.forEach((product) => { //Loops through list of products
        if (listOfProducts.indexOf(product) == index) { //If index of product match button index...
            const newItem = JSON.parse(localStorage.getItem("item")); //Store "item" from LS in the variable "newItem" 
            newItem.push(product); //Pushes product to "newItem"
            localStorage.setItem("item", JSON.stringify(newItem)); //Sends back added value to the key "item" in LS
        }
    })
    initCart(); //calls on function that sets the cart number on index.html
}
/* console.log(cartValue) */

// cart JS

const mobileContainer = document.querySelector(".mobileContainer")

function yeah() {
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

        title.innerHTML = product.title
        price.innerHTML = product.price + " kr"
        btn.innerHTML = "Ta bort"

        mobile.appendChild(img)
        mobile.appendChild(title)
        mobile.appendChild(price)
        mobile.appendChild(btn)
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
    yeah()
    
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
// Add your code here, remember to brake your code in to smaller function blocks
// to reduce complexity and increase readability. Each function should have
// an explainetory comment like the one for this function, see row 22.

// TODO: Remove the console.log and these comments when you've read them.
