class Sellable<T> {
  public cart: Array<T> = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
