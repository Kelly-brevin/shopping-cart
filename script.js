//product catalogue
/*const PRODUCTS = {
  water_10L: { name: "10L water", price: 200 },
  water_20L: { name: "20L water", price: 350 },
};

//DISPLAY COUNT ON CART AND CHECKOUT PAGE . PRACTICE LOCAL STORAGE

class Cart {
  constructor() {
    this.count = parseInt(localStorage.getItem("cartCount")) || 0;
    this.updateUI();
  }
  add(productId) {
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
  ?.addEventListener("click", () => cart.checkOut());*/

//textContent returns all the text exactly as it appears in the DOM(including hidden text and spacing)
//.innerText returns only the rendered text that is visible to the user, respecting CSS styling
//?? nullish coalescing checks for null or undefined
//Object is a built in global constructor

const PRODUCTS = {
  water_10L: { name: "10L water", price: 200 },
  water_20L: { name: "20L water", price: 350 },
};

class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cartItems") || {});
    this.updateUI();
  }

  add(productId) {
    this.items[productId] = (this.items[productId] ?? 0) + 1;
    this.save();
  }

  subtract(productId) {
    //guard close pattern: prevents invalid operations
    if (!this.items[productId]) return;
    this.items[productId]--;

    if (this.items[productId] === 0) {
      delete this.items[productId];
    }
    this.save();
  }
  getTotalCount() {
    //Object.values(obj) takes an object and returns an array of its property values
    return Object.values(this.items).reduce((sum, qty) => sum + qty, 0);
  }
  getTotalCost() {
    return Object.entries(this.items).reduce(
      (total, [productId, qty]) => total + PRODUCTS[productId].price * qty,
      0
    );
  }
  save() {
    localStorage.setItem("cartItems", JSON.stringify(this.items));
    this.updateUI();
  }
  updateUI() {
    //update cart count everywhere
    const count = this.getTotalCount();
    document
      .querySelectorAll("[data-cart-count]")
      .forEach((el) => (el.textContent = count));

    //update total price if element exists
    const totalEl = document.getElementById("cart-total");
    if (totalEl) {
      totalEl.textContent = `KES ${this.getTotalCost()}`;
    }
  }

  //switch to check-out page
  checkOut() {
    window.location.href = "cart.html";
  }
}

//Initialize the class
const cart = new Cart();
