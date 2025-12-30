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
