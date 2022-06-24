import { ADD_BASKET, CLEAR_BASKET } from '../types/basketTypes';

const initialState = {
  items: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      const items = structuredClone(state.items);
      let item = items.find((el) => el.product.id === action.payload.product.id);
      if (item) {
        items.quantity += action.payload.quantity;
      } else {
        items.push(action.payload);
      }

      return { items };
    case CLEAR_BASKET:
      return { items: [] };
    default:
      return state;
  }
};

export default basketReducer;
