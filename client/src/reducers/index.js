// Reducers

import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import { viewUsersReducer, createUserReducer } from './userReducer';
import authReducer from './authReducer';
import { blogsReducer, selectedBlogReducer } from './blogReducer';

export default combineReducers({
  auth: authReducer,
  viewUsersInState: viewUsersReducer,
  createUserInState: createUserReducer,
  blogs: blogsReducer,
  selectedBlog: selectedBlogReducer,
  // form: formReducer,
});
