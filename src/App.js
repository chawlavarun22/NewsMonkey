import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import Newsitem from './Newsitem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
         <Navbar/>
          <Switch>
         <Route exact  path="/sports"><Newsitem key="sports" pagesize={3} category="sports" country="in"/></Route>
         <Route exact path="/general"><Newsitem key="general" pagesize={3} category="general" country="in"/></Route>
         <Route exact path="/business"><Newsitem key="business" pagesize={3} category="business" country="in"/></Route>
         <Route exact path="/entertainment"><Newsitem key="entertainment" pagesize={3} category={"entertainment"} country="in"/></Route>
         <Route exact path="/"><Newsitem key="entertainment" pagesize={3} category="entertainment" country="in"/></Route>
         <Route exact path="/science"><Newsitem key="Science" pagesize={3} category="science" country="in"/></Route>
         <Route exact path="/technology"><Newsitem key="technology" pagesize={3} category="technology"country="in"/></Route>
         <Route exact path="/health"><Newsitem key="health" pagesize={3} category="health"country="in"/></Route>
          </Switch>
        </Router>  
      </div>
    )
  }
}


export default App;