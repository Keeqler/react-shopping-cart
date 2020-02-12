export const addToCart = product => ({
  type: '@cart/ADD',
  product,
});

export const removeFromCart = id => ({
  type: '@cart/REMOVE',
  id,
});

export const changeQuantity = (id, quantity) => ({
  type: '@cart/CHANGE_QUANTITY',
  id,
  quantity,
});
