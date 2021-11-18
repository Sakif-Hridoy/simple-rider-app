import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Search from './Component/Search/Search';
import NotFound from './Component/NotFound/NotFound';
import { createContext, useState } from 'react';

export const UserContext = createContext();
function App(){
const  [loggedInUser,setLoggedInUser]=useState({});

  return(
<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <div>
      <Header></Header>
<Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
         </Route>
         <PrivateRoute path="/destination/:vehicleType">
        <Destination></Destination>
        </PrivateRoute>
          <PrivateRoute path="/destination/">
          <Search></Search>
          </PrivateRoute>
          <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route >
        <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
</Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
