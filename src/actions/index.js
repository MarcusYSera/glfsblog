// Action

export const selectBlog = (blog) => {
  return {
    type: 'BLOG_SELECTED',
    payload: blog,
  };
};
