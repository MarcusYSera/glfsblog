// Action

import glfsBlogDB from '../apis/glfsBlogDB';

import {
  BLOG_SELECTED,
  SIGN_IN,
  SIGN_OUT,
  VIEW_USER,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
} from './types';

export const selectBlog = (blog) => {
  return {
    type: BLOG_SELECTED,
    payload: blog,
  };
};

// Google Auth Flow
export const signIn = (userId, firstName) => {
  return {
    type: SIGN_IN,
    payload: {userId, firstName},
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// USERS

// display all Users, grab all user data
export const viewUserAction = () => async (dispatch) => {
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

export const editUserAction = (userData) => {
  return {
    type: EDIT_USER,
    payload: userData,
  };
};

export const deleteUserAction = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
