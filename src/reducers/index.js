// Reducers

import { combineReducers } from 'redux';

const blogsReducer = () => {
  return [
    { title: 'tokyo', date: '06/28/2020' },
    { title: 'osaka', date: '06/28/2020' },
    { title: 'nagoya', date: '06/28/2020' },
    { title: 'sapporo', date: '06/28/2020' },
  ];
};

const selectedBlogReducer = (selectedBlog = null, action) => {
  if (action.type === 'BLOG_SELECTED') {
    return action.payload;
  }
  return selectedBlog;
};

combineReducers({
  blogs: blogsReducer,
  selectedBlog: selectedBlogReducer,
});
