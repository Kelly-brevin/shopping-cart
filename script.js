//class to handle the cart count
class CartCounter {
  constructor() {
    this.counts = {};
  }

  addArray(array) {
    array.forEach((item) => {
      this.counts[item] = (this.counts[item] ?? 0) + 1;
    });
  }
  addItem(item) {
    this.counts[item] = (this.counts[item] ?? 0) + 1;
  }
  getAllCounts() {
    return Object.values(this.counts).reduce((sum, count) => sum + count, 0);
  }
}

const counter = new CartCounter();

//Grab DOM elements
const addCart = document.getElementById("addCart");
const currentCount = document.getElementById("cartCount");

//event listener
addCart.addEventListener("click", () => {
  //add a specific item
  counter.addItem("apple");

  //update the DOM with the new count
  currentCount.innerText = `cart:${counter.getAllCounts()}`;
});

//textContent returns all the text exactly as it appears in the DOM(including hidden text and spacing)
//.innerText returns only the rendered text that is visible to the user, respecting CSS styling
//?? nullish coalescing checks for null or undefined
//Object is a built in global constructor

//logic to swich to the cart page
document.getElementById("cartCount").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "cart.html";
});

//DISPLAY COUNT ON CART AND CHECKOUT PAGE . PRACTICE LOCAL STORAGE

class Cart {
  constructor() {
    this.count = pareseInt(localStorage.getItem("cartCount")) || 0;
    this.updateUI();
  }
  add() {
    this.count++;
    this.save();
  }
  subtract() {
    if (this.count > 0) {
      this.count--;
      this.save();
    }
  }
  save() {
    localStorage.setItem("cartCount", this.count);
    this.updateUI();
  }
  updateUI() {
    const countEl = document.getElementById("count");
    if (countEl) countEl.textContent = this.count;
  }
}
const cart = new Cart();

//setup the add and subtract buttons on the cart page
document.getElementById("add")?.addEventListener("click", () => cart.add());
document
  .getElementById("subtract")
  ?.addEventListener("click", () => cart.subtract());
