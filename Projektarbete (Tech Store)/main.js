var listOfProducts;
const productsList = document.querySelector(".productsContainer"); // hämtar products-diven från htmlkoden och sparar den i en variabel
const cartValue = document.querySelector(".cartValue") // gets div from index.html and stores it inside the variable "cartValue" 

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
    //If the keys "item" and "itemsInCart" are not in LS, this statement creates the key "item" with the value of "cart", and the key "itemsInCart" with the value of "cartValues"
    if ((!localStorage.getItem("item")) && (!localStorage.getItem("itemsInCart"))) {

        localStorage.setItem("item", JSON.stringify(cart));
        localStorage.setItem("itemsInCart", JSON.stringify(cartValues))
    }

    initCart(); //calls on function that sets the cart number on index.html
}

function initCart() { // loads "onload" in shoppingCart.html to set cart number.
    const num = JSON.parse(localStorage.getItem("itemsInCart")) // gets key "itemsInCart" fom LS and stores it into a variable "num"
    if (num.length > 0) { // if num length is bigger than 0
        cartValue.innerHTML = (num.length) // display "num" length (current items in cart in LS) in header
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

            const cartNum = JSON.parse(localStorage.getItem("itemsInCart")); // gets key "itemsInCart" fom LS and stores it into a variable "cartNum"
            cartNum.push(newItem.length); // pushes the length of "newItems" (the numer of products stored in LS) into "cartNum"
            cartValue.innerHTML = (cartNum.length); // this insirt the length of "cartNum" into the div "cartValue" in index.html
            localStorage.setItem("itemsInCart", JSON.stringify(cartNum));

        }
    }
    )
}
/* console.log(cartValue) */

// cart JS

const mobileContainer = document.querySelector(".mobileContainer")

const getElementFromLS = JSON.parse(localStorage.getItem("item"));
    getElementFromLS.forEach((product) => {
    const mobile = document.createElement("div")
    const img = document.createElement("img")
    const title = document.createElement("h2")
    const price = document.createElement("h6")
    const btn = document.createElement("button")
    const trash = document.createElement("a")
    const trashIcon = document.createElement("i")

    mobile.setAttribute("class", "mobile")
    img.setAttribute("src", product.image)
    img.setAttribute("class", "cartImg")
    title.setAttribute("class", "cartTitle")
    price.setAttribute("class", "cartPrice")
    btn.setAttribute("class", "removeBtn")
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


    console.log(getElementFromLS)
}) 



// Add your code here, remember to brake your code in to smaller function blocks
// to reduce complexity and increase readability. Each function should have
// an explainetory comment like the one for this function, see row 22.

// TODO: Remove the console.log and these comments when you've read them.
