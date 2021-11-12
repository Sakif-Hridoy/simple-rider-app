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


function App(){


  return(
    <div>
      <Header></Header>
<Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
         </Route>
         <Route path="/destination">
        <Destination></Destination>
        </Route>
         {/* <PrivateRoute path="/book/:type">
          <Book></Book>
          </PrivateRoute> */}
          <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route >
        <Route exact path="/">
        <Home />
        </Route>
      </Switch>
</Router>
    </div>
  );
}

export default App;
