import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import DestinationAddress from './components/DestinationAddress/DestinationAddress';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NothingFound from './components/NothingFound/NothingFound';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

export const UserContext = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
    <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/transport/:vehicle">
          <DestinationAddress></DestinationAddress>
        </PrivateRoute>
        <PrivateRoute path="/blog">
          <Blog></Blog>
        </PrivateRoute>
        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <Route path="*">
          <NothingFound></NothingFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
