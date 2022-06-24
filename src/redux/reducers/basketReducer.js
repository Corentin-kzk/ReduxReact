import { ADD_BASKET} from "../types/basketTypes";

const initialState = {
    product: []
}

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BASKET:
        return {...state, product : action.payload}
      default:
       return state;
       
    }
  };

export default basketReducer;