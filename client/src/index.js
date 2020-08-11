import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import Header from './components/header/Header';

import Home from './components/Home';
import BlogShow from './components/blogs/BlogShow';
import BlogList from './components/blogs/BlogList';
import BlogCreate from './components/blogs/BlogCreate';
import BlogEdit from './components/blogs/BlogEdit';
import BlogDelete from './components/blogs/BlogDelete';
import Login from './components/signup/Login';
// import SignUp from './components/signup/SignUp';
import Admin from './components/admin/Admin';
import FinalForm from './components/signup/FinalForm';

import './components/global.css';

// switch when deploying to deactivate redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <div> */}
      <Header />
      <div className="ui text container">
        <div className="ui row">
          <div className="column wide">
            <Route path="/" exact component={Home} />
            <Route path="/blogs/list" component={BlogList} />
            <Route path="/blogs/new" component={BlogCreate} />
            <Route path="/blogs/edit/:id" component={BlogEdit} />
            <Route path="/blogs/view/:id" component={BlogShow} />
            <Route path="/blogs/delete/:id" component={BlogDelete} />
            <Route path="/signup/login" component={Login} />
            {/* <Route path="/signup/signup" component={SignUp} /> */}
            <Route path="/signup/finalform" component={FinalForm} />
            <Route path="/admin/admin" component={Admin} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
