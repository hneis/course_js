const catalog = {
  cart: null,
  goods: [
    {
      id_product: 123,
      product_name: 'Ноутбук',
      price: 45600,
    },
    {
      id_product: 456,
      product_name: 'Мышка',
      price: 1000,
    },
    {
      id_product: 305,
      product_name: 'Клавиатура',
      price: 2000,
    },
  ],
  init(cart) {
    this.cart = cart;
  },
  addToCart(good) {
    this.cart.addToCart(good);
  },
};

const cart = {
  cartListBlock: null,
  cartButton: null,
  goods: [
    {
      id_product: 123,
      product_name: 'Ноутбук',
      price: 45600,
      quantity: 1,
    },
    {
      id_product: 456,
      product_name: 'Мышка',
      price: 1000,
      quantity: 2,
    },
    {
      id_product: 305,
      product_name: 'Клавиатура',
      price: 2000,
      quantity: 1,
    },
  ],
  render() {
    this.cartListBlock = document.querySelector('.cart-list');
    this.cartButton = document.querySelector('.cart-btn');

    if (this.goods.length) {
      this.cartListBlock.textContent = `В корзине ${this.goods.length} товаров(а) стоимостью ${this.getCartPrice()}`;
    } else {
      this.cartListBlock.textContent = 'Корзина пуста';
    }

    this.cartButton.addEventListener('click', this.dropCart.bind(this));
    // this.cartButton.addEventListener('click', () => this.dropCart());
  },
  getCartPrice() {
    return this.goods.reduce((price, good) => {
      return price + good.price * good.quantity;
    }, 0);
  },
  dropCart() {
    this.goods = [];
    this.render();
  },
  addToCart(good) {
    this.goods.push(good);
  },
  cartItem(name, price) {
    return `<div>
                <div class="cat-title">${name}</div>
                <div class="cart-price">${price}</div>
            </div>`;
  },
};

cart.render();
catalog.init(cart);
