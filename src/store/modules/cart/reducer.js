import produce from 'immer';

export default (state = [], action) => {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.product.id,
        );

        if (productIndex > -1) {
          draft[productIndex].quantity++;
        } else {
          draft.push({
            ...action.product,
            quantity: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id,
        );

        if (productIndex > -1) draft.splice(productIndex, 1);
      });

    case '@cart/CHANGE_QUANTITY': {
      if (action.quantity <= 0) return state;

      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id,
        );

        if (productIndex > -1) draft[productIndex].quantity = action.quantity;
      });
    }

    default:
      return state;
  }
};
