import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import PostsList from './components/posts/PostsList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/posts'>
          <PostsList />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
