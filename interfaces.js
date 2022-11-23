var pt = { x: 123, y: 1234 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 218,
    sayHi: function () { return "Hello!"; }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 200,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
