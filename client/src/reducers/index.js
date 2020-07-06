// Reducers

import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import { viewUsersReducer } from './userReducer';
import authReducer from './authReducer';

import { BLOG_SELECTED } from '../actions/types';

const blogsReducer = () => {
  return [
    { title: 'tokyo', date: '06/28/2020' },
    { title: 'osaka', date: '06/28/2020' },
    { title: 'nagoya', date: '06/28/2020' },
    { title: 'sapporo', date: '06/28/2020' },
  ];
};

const selectedBlogReducer = (selectedBlog = null, action) => {
  if (action.type === BLOG_SELECTED) {
    return action.payload;
  }
  return selectedBlog;
};

export default combineReducers({
  auth: authReducer,
  users: viewUsersReducer,
  blogs: blogsReducer,
  selectedBlog: selectedBlogReducer,
  // form: formReducer,
});
