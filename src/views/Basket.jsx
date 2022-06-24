import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import { useProducts } from '../services/Products';


function Basket() {
  const products = useProducts();

  const onlyFourProducts = products?.slice(-4);
  const { firstname} = useSelector((state) => state.user);
  return (
    <div>
      <h2>Hi {firstname}</h2>
      <h3>There are 4 items in your basket</h3>
      <button>Clear basket</button>
      <hr />

      <div className="basket-container">
        {onlyFourProducts &&
          onlyFourProducts.map((product) => (
            <Product key={product.id} product={product}>
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
