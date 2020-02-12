import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FaShoppingCart } from 'react-icons/all';

import Container from './HeaderStyles';

function Header({ cartItemQty }) {
  return (
    <Container>
      <Link className="cart-link" to="/cart">
        <div className="cart-details">
          <strong>Cart</strong>
          <span>{cartItemQty} items</span>
        </div>
        <div className="icon-wrapper">
          <FaShoppingCart size="100%" />
        </div>
      </Link>
    </Container>
  );
}

Header.propTypes = {
  cartItemQty: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartItemQty: state.cart.products.length,
});

export default connect(mapStateToProps)(Header);
