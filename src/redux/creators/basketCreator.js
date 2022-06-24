import { ADD_BASKET } from '../types/basketTypes';

export const addToBasket = (numberOfArticle, product) => {
  return {
    type: ADD_BASKET,
    payload: {
      product: product,
      numberOfPruduct: numberOfArticle,
    },
  };
};
