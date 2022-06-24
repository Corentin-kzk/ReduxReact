import React from 'react';
import Product from './Product';
import AddFormProduct from './AddFormProduct';

function ProductsList({ products }) {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product key={index} product={product}>
          <AddFormProduct product={product} />
        </Product>
      ))}
    </div>
  );
}

export default ProductsList;
