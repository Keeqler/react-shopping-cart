import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import { FaMinusCircle, FaPlusCircle, MdClose } from 'react-icons/all';

import Container from './CartStyles';
import Button from '../../components/Button/Button';

function Cart({ cart, changeQuantity, removeFromCart }) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="image"></th>
            <th className="details">Product</th>
            <th className="quantity">Quantity</th>
            <th className="total">Total</th>
            <th className="remove-button"></th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map(product => (
            <tr key={product.id}>
              <td className="image">
                <img src={product.image} alt={product.name} />
              </td>
              <td className="details">
                <div className="inner">
                  <span className="name">{product.name}</span>
                  <span className="price">US$ {product.price}</span>
                </div>
              </td>
              <td className="quantity">
                <div className="inner">
                  <button
                    type="button"
                    onClick={() => {
                      changeQuantity(product.id, product.quantity - 1);
                    }}
                  >
                    <FaMinusCircle size="100%" />
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    type="button"
                    onClick={() => {
                      changeQuantity(product.id, product.quantity + 1);
                    }}
                  >
                    <FaPlusCircle size="100%" />
                  </button>
                </div>
              </td>
              <td className="total price">US$ {product.total.toFixed(2)}</td>
              <td className="remove-button">
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdClose size="30px" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <aside>
        <div className="inner">
          <div className="top">
            <h1>Total</h1>
            <span className="price">US$ {cart.total.toFixed(2)}</span>
          </div>
          <Button text="Checkout" />
        </div>
        <Link to="/">Continue buying</Link>
      </aside>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  state => ({
    cart: state.cart,
  }),
  mapDispatchToProps,
)(Cart);
