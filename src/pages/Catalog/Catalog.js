import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import Container from './CatalogStyles';
import Button from '../../components/Button/Button';

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
        <figure className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <figcaption>
            <span className="product-name">{product.name}</span>
            <strong className="product-price">US$ {product.price}</strong>
          </figcaption>
          <Button
            text="Add to cart"
            onClick={() => addToCartRequest(product.id)}
          />
        </figure>
      ))}
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Catalog);
