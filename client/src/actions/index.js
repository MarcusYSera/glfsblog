// Action

import glfsBlogDB from '../apis/glfsBlogDB';

import {
  BLOG_SELECTED,
  SIGN_IN, SIGN_OUT,
  // CREATE_USER,
  VIEW_USER
} from './types';

export const selectBlog = (blog) => {
  return {
    type: BLOG_SELECTED,
    payload: blog,
  };
};

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

export const viewUser = () => async (dispatch) => {
    const response = await glfsBlogDB.get('/api');

    dispatch({ type: VIEW_USER, payload: response.data });
  };


// export const createUser = async (fname, lname, gender, email, pword) => {
//   const response = await glfsBlogDB.post('/api/users');

//   dispatch({
//     type: CREATE_USER,
//     payload: {
//       firstName: fname,
//       lastName: lname,
//       gender: gender,
//       email: email,
//       password: pword,
//     },
//   });
// };
