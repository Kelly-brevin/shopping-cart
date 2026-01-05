//product catalogue
const PRODUCTS = {
  water_10L: { name: "10L water", price: 200 },
  water_20L: { name: "20L water", price: 350 },
};

//DISPLAY COUNT ON CART AND CHECKOUT PAGE . PRACTICE LOCAL STORAGE

class Cart {
  constructor() {
    this.count = parseInt(localStorage.getItem("cartCount")) || 0;
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
    const countEl = document.querySelectorAll("[data-cart-count]");
    countEl.forEach((el) => (el.textContent = this.count));
  }

  checkOut() {
    window.location.href = "cart.html";
  }
}
const cart = new Cart();

//setup the add and subtract buttons on the cart page
document.getElementById("add")?.addEventListener("click", () => cart.add());
document
  .getElementById("subtract")
  ?.addEventListener("click", () => cart.subtract());
document.getElementById("addCart")?.addEventListener("click", () => cart.add());
document
  .getElementById("cartPage")
  ?.addEventListener("click", () => cart.checkOut());

//textContent returns all the text exactly as it appears in the DOM(including hidden text and spacing)
//.innerText returns only the rendered text that is visible to the user, respecting CSS styling
//?? nullish coalescing checks for null or undefined
//Object is a built in global constructor
