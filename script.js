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
    return this.counts;
  }
}
const counter = new CartCounter();

//Grab DOM elements
const addCart = document.getElementById("addCart");
const currentCount = document.getElementById("cartCount");

//event listener
addCart.addEventListener("click", () => {
  //add a specific item
  counter.addItem("");

  //update the DOM with the new count
});
