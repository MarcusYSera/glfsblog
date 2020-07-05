import { VIEW_USER, CREATE_USER } from '../actions/types';

export const showUsers = (state = [], action) => {
  switch (action.type) {
    case VIEW_USER:
      return action.payload;
    default:
      return state;
  }
};

export const createUser = (state = [], action) => {
  switch (action.type) {
    case CREATE_USER: 
      return {}
  }
}