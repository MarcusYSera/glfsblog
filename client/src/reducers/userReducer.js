import { VIEW_USER } from '../actions/types';

export default (state = [], action) => {
  switch(action.type){
    case VIEW_USER:
      return action.payload;
    default:
      return state;
  }
};
