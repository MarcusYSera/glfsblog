// Action

import glfsBlogDB from '../apis/glfsBlogDB';

import { BLOG_SELECTED, SIGN_IN, SIGN_OUT, VIEW_USER, CREATE_USER } from './types';

export const selectBlog = (blog) => {
  return {
    type: BLOG_SELECTED,
    payload: blog,
  };
};

// Google Auth Flow
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// USERS

// display all Users, grab all user data
export const viewUser = () => async (dispatch) => {
  const response = await glfsBlogDB.get('/api');

  dispatch({ type: VIEW_USER, payload: response.data });
};

// create new user
export const createUserAction = (newUser) => {
  return {
    type: CREATE_USER,
    payload: newUser,
  };
};
