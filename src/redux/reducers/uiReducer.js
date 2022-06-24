import { UPDATE_DARKMODE} from "../types/uiTypes";

const initialState = {
    darkMode : false
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_DARKMODE:
        return { darkMode : action.payload}
      default:
       return state;
       
    }
  };

export default uiReducer;