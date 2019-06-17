export const addToCartItem = product => {
  return {
    type: "ADD_CART_ITEM",
    product: product
  };
};

export const removeCartItem = product => {
  return {
    type: "REMOVE_CART_ITEM",
    product: product
  };
};
