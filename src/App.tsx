import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoutes';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <PrivateRoute redirectTo="/login" exact path="/">
              <Home />
            </PrivateRoute>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
