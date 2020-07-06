import React from 'react';

const BlogCreate = () => {
  return (
      <div className="column">
        <h1 className="ui header">Post New Blog</h1>
        <form className="ui large form">
          <div className="ui stacked segment">
            <input type="text" placeholder="Blog Title" required />
            <input type="file" accept="image/png, image/jpeg" />
            <input type="text" placeholder="Blog description" />
            <input type="text" placeholder="Blog location" />
            <input type="text" placeholder="Blog category/tags/sort" />
            <textarea type="text" placeholder="Blog body" rows="10" cols="50" />
            <input
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
            />
            <button>
              Add category ie places to eat, places to see, advice, ect
            </button>
            <input type="submit" value="Post" />
          </div>
        </form>
      </div>
  );
};

export default BlogCreate;
