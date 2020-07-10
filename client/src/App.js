import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './components/auth/Signup';

function App() {
  return (
    <Router>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/posts'>Posts</Route>
    </Router>
  );
}

export default App;
