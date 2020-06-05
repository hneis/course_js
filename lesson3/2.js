let cart = [1, 2, 3, 4, 5, 6, 7, 8];

cart.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

console.log(cart.sum());
