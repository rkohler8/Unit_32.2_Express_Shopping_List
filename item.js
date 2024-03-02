const items = require("./fakeDB")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    items.push(this);
  }

  static getAll() {
    return items;
  }


  static get(name) {
    const item = items.find(i => i.name === name);
    if(item === undefined) {
      throw { message: "Not Found", status: 404 }
    }
    return item;
  }


  static update(name, data) {
    let item = Item.get(name);
    if(item === undefined) {
      throw { message: "Not Found", status: 404 }
    }
    item.name = data.name;
    item.price = data.price;

    return item;    
  }


  static delete(name) {
    let index = items.findIndex(i => i.name === name);
    if(index === -1) {
      throw { message: "Not Found", status: 404 }
    }
    items.splice(index, 1);
  }
}

module.exports = Item;