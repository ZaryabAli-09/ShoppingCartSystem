"use strict";
// Constants and variables
const productsArray = [
  {
    id: 1,
    productImg: "./shoe/1.jpg",
    title: "BLACKISH REGULARS",
    price: 15,
  },
  {
    id: 2,
    productImg: "./shoe/2.jpg",
    title: "DARK GREEN SNEAKER",
    price: 40,
  },
  {
    id: 3,
    productImg: "./shoe/3.jpg",
    title: "WHITE SNEAKERS",
    price: 25,
  },
  {
    id: 4,
    productImg: "./shoe/4.jpg",
    title: "GREEN LONG REGULARS",
    price: 17,
  },
  {
    id: 5,
    productImg: "./shoe/5.jpg",
    title: "GREY N WHITE SNEAKERS",
    price: 50,
  },
  {
    id: 6,
    productImg: "./shoe/6.jpg",
    title: "LIGHT WEIGHT SHOES",
    price: 20,
  },
  {
    id: 7,
    productImg: "./shoe/7.jpg",
    title: "FORMAL SNEAKERS",
    price: 39,
  },
  {
    id: 8,
    productImg: "./shoe/8.jpg",
    title: "AEROREADY JOGGERS",
    price: 47,
  },
];
const productsWrapper = document.querySelector(".cart-products");
const sideCartWrapper = document.querySelector(".side-cart-content");
const sideCartBtn = document.querySelector(".cart-etc");
const sideCartCloseBtn = document.getElementById("cart-close");
const sideCart = document.querySelector(".side-cart");
const addToCart = document.getElementsByClassName("add-cart");
const removeFromCart = document.querySelectorAll(".remove-cart");
const buyMsg = document.querySelector(".msg-div");
const buyBtn = document.querySelector(".buy-btn");
const totalProductsInCart = document.querySelector(".t-products-count");
const totalPriceShowing = document.querySelector(".total-price");
let totalProducts = 0;
let totalPrice = 0;
// Functions
// updating total
const updatingTotal = (sideProductBox) => {
  const productPrice =
    sideProductBox.lastElementChild.previousElementSibling.lastElementChild
      .textContent;
  totalPrice += Number(productPrice);
  totalPriceShowing.textContent = `$${totalPrice}`;
};

// Remove products from cart
const removeProductsFromCart = (event) => {
  // removing product from cart
  event.target.parentElement.remove();
  //  decrementing total products
  totalProducts--;
  totalProductsInCart.textContent = totalProducts;
  // decrementing product price
  const PriceDecrement =
    event.target.previousElementSibling.lastElementChild.textContent;
  totalPrice = totalPrice - Number(PriceDecrement);
  totalPriceShowing.textContent = `$${totalPrice}`;
  // decrement total
};
// Adding products to cart
const addProductsToCart = (event) => {
  // updating totalProducts
  totalProducts++;

  totalProductsInCart.textContent = totalProducts;
  const path1 = event.target.parentElement.firstElementChild.src;
  const path2 =
    event.target.previousElementSibling.firstElementChild.textContent;
  const path3 =
    event.target.previousElementSibling.lastElementChild.textContent;
  const sideProductBox = document.createElement("div");
  sideProductBox.className = "side-cart-product-box";
  sideProductBox.innerHTML = `<img class="side-cart-product-box img" src=${path1}></img><div class="side-cart-div"> <h2 class="side-cart-product-title">${path2}</h2><span class="side-cart-product-price ">${path3}</span></div><button class="remove-cart" onclick="removeProductsFromCart(event)">Delete</button>`;
  sideCartWrapper.append(sideProductBox);

  //  updating total
  updatingTotal(sideProductBox);
};
// Side cart closing function
const onSideCartCloseBtn = () => {
  sideCart.style.display = "none";
}; // side opening function
const onSideCartBtn = () => {
  sideCart.style.display = "block";
};
// Function which can create and render products to WebPage
const productsRendering = () => {
  for (let i = 0; i < productsArray.length; i++) {
    const productBox = document.createElement("div");
    productBox.className = "product-box";
    productBox.innerHTML = `<img class="product-img" src=${productsArray[i].productImg}></img><div> <h2 class="product-title">${productsArray[i].title}</h2> <p>$</p> <span class="product-price">${productsArray[i].price}</span></div> <span class="add-cart">Add to Cart</span>`;
    productsWrapper.append(productBox);
  }
};
// Calling products rendering function
productsRendering();

// EventListener
sideCartBtn.addEventListener("click", onSideCartBtn);
sideCartCloseBtn.addEventListener("click", onSideCartCloseBtn);
Array.from(addToCart).forEach((element) => {
  element.addEventListener("click", addProductsToCart);
});
// Events and anonymous functions
buyBtn.addEventListener("click", function () {
  buyMsg.classList.remove("hidden");
});
buyMsg.addEventListener("click", function () {
  buyMsg.classList.add("hidden");
});
