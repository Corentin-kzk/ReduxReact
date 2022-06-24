import { UPDATE_USER } from  '../types/userTypes';

export function updateUser(dataUser) {
  return {
    type: UPDATE_USER,
    payload: dataUser,
  };
}