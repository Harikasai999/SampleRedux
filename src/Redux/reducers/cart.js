const cart = {
  cartItems: [],
  total: 0
};

export default function cartReducer(state = cart, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return Object.assign({}, state, {
        cartItems: cartItems,
        total: total
      });
    case "REMOVE_CART_ITEM":
      return Object.assign({}, state, {
        cartItems: cartItems,
        total: total
      });

    default:
      return state;
  }
}
