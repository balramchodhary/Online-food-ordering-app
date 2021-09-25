
import './App.css';
import Navbar1 from './component/Navbar1';
import Home from './component/Home';
import Footer from './component/footer';
import Pizza from './component/pizza';
import Burger from './component/burger';
import Aboutus from './component/aboutus'
import Register from './component/Register';
import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  

  render() {
    return (<Router>

      <Navbar1 />

      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/pizza'><Pizza /></Route>
        <Route exact path='/burger'><Burger/></Route>
        <Route exact path='/aboutus'><Aboutus/></Route>
        <Route exact path='/demo' ><Register/></Route>

      </Switch>
      <Footer />
    </Router >)
  }
}
export default App;
