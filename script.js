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
    //cartItems is the key
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

//WIRE UP THE BUTTONS
document
  .getElementById("add10L")
  ?.addEventListener("click", () => cart.add("water_10L"));

document
  .getElementById(add20L)
  ?.addEventListener("click", () => cart.add("water_20L"));

document
  .getElementById("cartPage")
  ?.addEventListener("click", () => cart.checkOut());
