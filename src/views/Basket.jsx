import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import { clearBasket } from '../redux/creators/basketCreator';

function Basket() {
  const { firstname } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const onClearBasket = () => {
    dispatch(clearBasket());
  };
  return (
    <div>
      <h2>Hi {firstname}</h2>
      <h3>There are {items.lenght} items in your basket</h3>
      <button onClick={() => onClearBasket()}>Clear basket</button>
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
