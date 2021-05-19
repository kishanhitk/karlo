import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoutes";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <PrivateRoute redirectTo="/login" exact path="/">
              <Home></Home>
            </PrivateRoute>
            <Route path="/">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
