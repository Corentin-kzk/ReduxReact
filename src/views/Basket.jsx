import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import { useProducts } from '../services/Products';

function Basket() {
  const { firstname } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.basket);
  console.log(items);
  return (
    <div>
      <h2>Hi {firstname}</h2>
      <h3>There are {items.lenght} items in your basket</h3>
      <button>Clear basket</button>
      <hr />

      <div className="basket-container">
        {items &&
          items.map((product) => (
            <Product key={product.product.id} product={product.product}>
              <div>
                <button type="submit">Remove</button>
              </div>
            </Product>
          ))}
      </div>
    </div>
  );
}

export default Basket;
