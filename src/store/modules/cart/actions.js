export const addToCartRequest = id => ({
  type: '@cart/ADD_REQUEST',
  id,
});

export const addToCartSuccess = product => ({
  type: '@cart/ADD_SUCCESS',
  product,
});

export const removeFromCart = id => ({
  type: '@cart/REMOVE',
  id,
});

export const changeQuantityRequest = (id, quantity) => ({
  type: '@cart/CHANGE_QUANTITY_REQUEST',
  id,
  quantity,
});

export const changeQuantitySuccess = (id, quantity) => ({
  type: '@cart/CHANGE_QUANTITY_SUCCESS',
  id,
  quantity,
});
