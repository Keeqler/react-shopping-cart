import produce from 'immer';

export default (state = { products: [], total: 0 }, action) => {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          product => product.id === action.product.id,
        );

        if (productIndex > -1) {
          draft.products[productIndex].quantity++;
          draft.products[productIndex].total =
            draft.products[productIndex].price *
            draft.products[productIndex].quantity;
        } else {
          draft.products.push({
            ...action.product,
            quantity: 1,
            total: action.product.price,
          });
        }

        draft.total = draft.products.reduce(
          (previous, current) => previous + current.price * current.quantity,
          0,
        );
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          product => product.id === action.id,
        );

        if (productIndex > -1) draft.products.splice(productIndex, 1);

        draft.total = draft.products.reduce(
          (previous, current) => previous + current.price * current.quantity,
          0,
        );
      });

    case '@cart/CHANGE_QUANTITY': {
      if (action.quantity <= 0) return state;

      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          product => product.id === action.id,
        );

        if (productIndex > -1) {
          draft.products[productIndex].quantity = action.quantity;
          draft.products[productIndex].total =
            draft.products[productIndex].price * action.quantity;
        }

        draft.total = draft.products.reduce(
          (previous, current) => previous + current.price * current.quantity,
          0,
        );
      });
    }

    default:
      return state;
  }
};
