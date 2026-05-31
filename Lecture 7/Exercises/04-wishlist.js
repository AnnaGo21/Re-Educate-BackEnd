/**
 * 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()
 */

class Wishlist {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  addItem(name) {
    this.items.push({
      id: this.nextId++, //post increase: which means to use the current value and then increase it
      name: name,
    });
  }

  deleteItem(id) {
    const index = this.items.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updateItem(id, newName) {
    const item = this.items.find((item) => item.id === id);

    if (item) {
      item.name = newName;
    }
  }
}

const wishlist = new Wishlist();

wishlist.addItem("Laptop");
wishlist.addItem("Phone");
wishlist.addItem("Earphones");

wishlist.updateItem(1, "Gaming Laptop");
wishlist.deleteItem(2);

console.log(wishlist.items);
