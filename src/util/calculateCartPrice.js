export const calcultateCartPrice = (cartProducts) => {
  
  let totalPrice = 0;

  cartProducts.forEach((product) => {
    const { price ,cartQty} = product;
    const subtotal = price * cartQty;
    totalPrice += subtotal;
  });
  
  return totalPrice
};
