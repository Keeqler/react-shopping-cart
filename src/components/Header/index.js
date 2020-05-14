import React from 'react';
import { FaShoppingCart } from 'react-icons/all';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import LogoImg from '~/resources/logo.png';

import { Container, LogoContainer, Logo, LogoText, CartLink } from './styles';

function Header({ cartItemQty }) {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoImg} alt="logo" />
        <LogoText>Shopping Cart</LogoText>
      </LogoContainer>
      <CartLink to="/cart">
        <FaShoppingCart size={18} color="var(--primary)" />
        &nbsp;
        {cartItemQty === 0 && 'is empty.'}
        {cartItemQty === 1 && `has ${cartItemQty} product.`}
        {cartItemQty > 1 && `has ${cartItemQty} products.`}
      </CartLink>
    </Container>
  );
}

Header.propTypes = {
  cartItemQty: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartItemQty: state.cart.length,
});

export default connect(mapStateToProps)(Header);
