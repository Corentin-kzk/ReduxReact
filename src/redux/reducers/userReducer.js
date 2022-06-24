import { UPDATE_USER} from '../types/userTypes';

const initialState = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doa@email.com',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default userReducer;
