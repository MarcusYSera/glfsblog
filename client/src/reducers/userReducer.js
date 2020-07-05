import { VIEW_USER } from '../actions/types';

export const showUsersReducers = (state = [], action) => {
  switch (action.type) {
    case VIEW_USER:
      return action.payload;
    default:
      return state;
  }
};
