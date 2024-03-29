import produce from 'immer';

export default (state = [], action) => {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id,
        );

        if (productIndex > -1) draft.splice(productIndex, 1);
      });

    case '@cart/CHANGE_QUANTITY_SUCCESS': {
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
