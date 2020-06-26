import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
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
          <Header />
          <Route path="/" exact component={BlogList} />
          <Route path="/blogs/new" component={BlogCreate} />
          <Route path="/blogs/edit" component={BlogEdit} />
          <Route path="/blogs/view" component={BlogShow} />
          <Route path="/blogs/delete" component={BlogDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
