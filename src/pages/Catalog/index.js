import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import api from '~/services/api';

import AddToCartButton from '~/components/Button';

import * as CartActions from '~/store/modules/cart/actions';

import {
  Container,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
} from './styles';

function Catalog({ addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('products');

      setProducts(response.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductDetails>
            <ProductName className="product-name">{product.name}</ProductName>
            <ProductPrice className="product-price">
              US$ {product.price}
            </ProductPrice>
          </ProductDetails>
          <AddToCartButton
            text="Add to cart"
            icon={FaCartPlus}
            onClick={() => addToCartRequest(product.id)}
          />
        </ProductCard>
      ))}
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Catalog);

Catalog.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
};
