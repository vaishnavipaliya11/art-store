export const calcultateCartPrice = (cartProducts) => {
  let totalPrice = 0;

  cartProducts.forEach((product) => {
    const { price, cartItem } = product;
    const subtotal = price * cartItem.quantity;
    totalPrice += subtotal;
  });
  return totalPrice
};
