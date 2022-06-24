import { ADD_BASKET } from '../types/basketTypes';

const initialState = {
  items: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      console.log(action.payload);
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default basketReducer;
