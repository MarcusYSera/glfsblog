import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import BlogShow from './blogs/BlogShow';
import BlogList from './blogs/BlogList';
import BlogCreate from './blogs/BlogCreate';
import BlogEdit from './blogs/BlogEdit';
import BlogDelete from './blogs/BlogDelete';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={BlogList} />
          <Route path="/blogs/new" exact component={BlogCreate} />
          <Route path="/blogs/edit" exact component={BlogEdit} />
          <Route path="/blogs/view" exact component={BlogShow} />
          <Route path="/blogs/delete" exact component={BlogDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
