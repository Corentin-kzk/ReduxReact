import { ADD_BASKET, CLEAR_BASKET } from '../types/basketTypes';

export const addToBasket = (numberOfArticle, product) => {
  return {
    type: ADD_BASKET,
    payload: {
      product: product.product,
      numberOfPruduct: numberOfArticle,
    },
  };
};

export const clearBasket = () => {
  return {
    type: CLEAR_BASKET,
  };
};
