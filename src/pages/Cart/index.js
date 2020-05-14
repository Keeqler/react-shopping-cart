import React from 'react';
import {
  FaMinusCircle,
  FaPlusCircle,
  MdClose,
  GoCheck,
  MdArrowBack,
  FaTrash,
} from 'react-icons/all';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CheckoutButton from '~/components/Button';

import * as CartActions from '~/store/modules/cart/actions';

import {
  Container,
  CartTable,
  HeadContainer,
  ImageHead,
  DetailsHead,
  QuantityHead,
  TotalHead,
  RemoveHead,
  ProductRow,
  ProductCell,
  ProductImage,
  ProductDetailsContainer,
  ProductName,
  ProductPrice,
  ProductQuantityContainer,
  ProductQuantity,
  ProductTotal,
  RightSideContainer,
  TotalContainer,
  Total,
  ContinueBuyingLink,
} from './styles';

function Cart({ cart, total, changeQuantityRequest, removeFromCart }) {
  return (
    <Container>
      <CartTable>
        <HeadContainer>
          <tr>
            <ImageHead />
            <DetailsHead>Product</DetailsHead>
            <QuantityHead>Quantity</QuantityHead>
            <TotalHead>Total</TotalHead>
            <RemoveHead />
          </tr>
        </HeadContainer>
        <tbody>
          {cart.map(product => (
            <ProductRow key={product.id}>
              <ProductCell>
                <ProductImage src={product.image} alt={product.name} />
              </ProductCell>
              <ProductCell>
                <ProductDetailsContainer>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>US$ {product.price}</ProductPrice>
                </ProductDetailsContainer>
              </ProductCell>
              <ProductCell>
                <ProductQuantityContainer>
                  <FaMinusCircle
                    size={16}
                    color="var(--qty-button)"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      changeQuantityRequest(product.id, product.quantity - 1);
                    }}
                  />
                  <ProductQuantity>{product.quantity}</ProductQuantity>
                  <FaPlusCircle
                    size={16}
                    color="var(--qty-button)"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      changeQuantityRequest(product.id, product.quantity + 1);
                    }}
                  />
                </ProductQuantityContainer>
              </ProductCell>
              <ProductCell>
                <ProductTotal>US$ {product.total.toFixed(2)}</ProductTotal>
              </ProductCell>
              <ProductCell>
                <FaTrash
                  size={20}
                  color="var(--text)"
                  style={{ cursor: 'pointer' }}
                  onClick={() => removeFromCart(product.id)}
                />
              </ProductCell>
            </ProductRow>
          ))}
        </tbody>
      </CartTable>
      <RightSideContainer>
        <TotalContainer>
          <h1>Total</h1>
          <Total>US$ {total.toFixed(2)}</Total>
        </TotalContainer>
        <CheckoutButton text="Checkout" icon={GoCheck} />
        <ContinueBuyingLink to="/">
          <MdArrowBack size={16} color="var(--text)" /> &nbsp; Continue buying
        </ContinueBuyingLink>
      </RightSideContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    total: product.price * product.quantity,
  })),
  total: state.cart.reduce(
    (previous, current) => current.price * current.quantity + previous,
    0,
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
