import React from 'react';

const BlogCreate = () => {
  return (
    <div className="column">
      <h1 className="ui header">Post New Blog</h1>
      <form className="ui large form">
        <div className="ui stacked segment">
          <div className="field">
            <input type="text" placeholder="Blog Title" required />
          </div>
          <div className="field">
            <input type="text" placeholder="Blog location" />
          </div>
          <div className="field">
            <input type="text" placeholder="Blog category/tags/sort" />
          </div>
          <div className="field">
            <input
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
            />
          </div>
          <div className="field">
            <input type="file" accept="image/png, image/jpeg" />
          </div>
          <div className="field">
            <input type="text" placeholder="Blog description" />
          </div>
          <div className="field">
            <textarea type="text" placeholder="Blog body" rows="10" cols="50" />
          </div>
          <div className="field">
            <button>
              Add category ie places to eat, places to see, advice, ect
            </button>
          </div>
          <input type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;
