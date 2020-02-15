import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { addToCartSuccess, changeQuantitySuccess } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

function* addToCart({ id }) {
  const existentProduct = yield select(({ cart }) =>
    cart.find(product => product.id === id),
  );
  const stock = (yield call(api.get, `/stock/${id}`)).data.quantity;
  const cartQuantity = existentProduct ? existentProduct.quantity : 0;

  if (cartQuantity > stock) {
    toast.error('Product quantity out of stock');
    return;
  }

  if (existentProduct) {
    yield put(changeQuantitySuccess(id, existentProduct.quantity + 1));
  } else {
    const product = yield call(api.get, `/products/${id}`);

    yield put(addToCartSuccess({ ...product.data, quantity: 1 }));

    history.push('/cart');
  }
}

function* changeQuantity({ id, quantity }) {
  if (quantity <= 0) return;

  const existentProduct = yield select(({ cart }) =>
    cart.find(product => product.id === id),
  );
  const stock = (yield call(api.get, `/stock/${id}`)).data.quantity;

  if (existentProduct.quantity > stock) {
    toast.error('Product quantity out of stock');
    return;
  }

  yield put(changeQuantitySuccess(id, quantity));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/CHANGE_QUANTITY_REQUEST', changeQuantity),
]);
