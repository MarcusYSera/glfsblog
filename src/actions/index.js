// Action

import { BLOG_SELECTED, SIGN_IN, SIGN_OUT } from './types';

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
