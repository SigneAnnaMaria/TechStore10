var listOfProducts;
const productsList = document.querySelector(".productsContainer"); // hämtar products-diven från htmlkoden och sparar den i en variabel

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    listOfProducts.forEach((product,index) => { //loopen som går igenom varje product
        //hämtar från "product" och lägger in produktobjekten i egna element i våran "productList"-div
        productsList.innerHTML += `
        <div class="product">
            <h1 class="titleProduct">${product.title}</h1>
            <p class="descriptionProduct">${product.description}</p>
            <img id="img${index}"class="imageProduct" src="${product.image}" alt="${product.title}">
            <h3 class="priceProduct">${product.price} kr</h3>
            <button id="button${index}" class="buttonProduct"><a class="buttonCart"><i class="fa-solid fa-cart-arrow-down"></i></a>Lägg till i kundvagnen</button>
        </div>

    `;
    });
}

const btnProduct = document.querySelectorAll(".buttonProduct");
btnProduct.addEventListener("click", addToCart());

function addToCart() {
    
    listOfProducts.forEach((product) => {
        btnProduct.index === product.index
        console.log(product.index)
    })
}

// Add your code here, remember to brake your code in to smaller function blocks
// to reduce complexity and increase readability. Each function should have
// an explainetory comment like the one for this function, see row 22.

// TODO: Remove the console.log and these comments when you've read them.
