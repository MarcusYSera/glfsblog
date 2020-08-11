import {BLOG_SELECTED} from '../actions/types'

export const blogsReducer = () => {
  return [
    { title: 'tokyo', date: '06/28/2020' },
    { title: 'osaka', date: '06/28/2020' },
    { title: 'nagoya', date: '06/28/2020' },
    { title: 'sapporo', date: '06/28/2020' },
  ];
};

export const selectedBlogReducer = (selectedBlog = null, action) => {
  // determins if action is relevant
  if (action.type === BLOG_SELECTED) {
    return action.payload;
  }
  return selectedBlog;
};