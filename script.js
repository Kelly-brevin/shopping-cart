//OOP TO HANDLE BUTTON CLICKS
//user clicks add to cart. Intitial count of one is pushed to an empty products array containing product data
//quantity button appears to

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

// create the counter
const counter = new CartCounter();
