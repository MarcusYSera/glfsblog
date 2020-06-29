import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import BlogShow from './blogs/BlogShow';
import BlogList from './blogs/BlogList';
import BlogCreate from './blogs/BlogCreate';
import BlogEdit from './blogs/BlogEdit';
import BlogDelete from './blogs/BlogDelete';
import Login from './signup/Login';
import SignUp from './signup/SignUp';

import './global.css';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={BlogList} />
              <Route path="/blogs/new" component={BlogCreate} />
              <Route path="/blogs/edit" component={BlogEdit} />
              <Route path="/blogs/view" component={BlogShow} />
              <Route path="/blogs/delete" component={BlogDelete} />
              <Route path="/signup/login" component={Login} />
              <Route path="/signup/signup" component={SignUp} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
