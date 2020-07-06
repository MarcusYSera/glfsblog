import { VIEW_USER } from '../actions/types';

export const viewUsersReducer = (state = [], action) => {
  switch (action.type) {
    case VIEW_USER:
      return action.payload;
    default:
      return state;
  }
};
