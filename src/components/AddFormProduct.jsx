import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/creators/basketCreator';

const AddFormProduct = (product) => {
  const dispatch = useDispatch();
  const onAddToBasket = (e) => {
    e.preventDefault();
    dispatch(addToBasket(e.target.quantity.value, product));
  };
  return (
    <form
      onSubmit={(e) => {
        onAddToBasket(e);
      }}>
      Quantity :
      <input name="quantity" type="number" min="1" step="1" defaultValue="1" required style={{ width: '30px' }} />
      <br />
      <button type="submit">Add to basket</button>
    </form>
  );
};

export default AddFormProduct;
