import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';


function ProductsList({ products }) {
  const onAddToBasket = (e, product) =>{
    e.preventDefault();
    console.log(e.target.quantity.value, product);
    dispatch(
      updateUser({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
      })
    );
  }


  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product key={index} product={product}>
          <form onSubmit={ (e) => { onAddToBasket(e, product)}}>
            Quantity : <input name='quantity' type="number" min="1" step="1" defaultValue="1" required style={{ width: '30px' }} />
            <br />
            <button type="submit">Add to basket</button>
          </form>
        </Product>
      ))}
    </div>
  );
}

export default ProductsList;
