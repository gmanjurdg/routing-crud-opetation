import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from './Component/Books';
import Movies from './Component/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobiles from './Component/Mobiles';
import Add from './Component/Add';


export default class App extends Component {
  render() {
    return (
        <Router>
          <Add />
              <React.Fragment>
              <h1>Book Anything</h1>
              <hr/>
              
                      <ul>
                        <li><Link to="/">Books</Link></li>
                        <li> <Link to="/Movies">Movies</Link></li>
                        <li><Link to="/Mobiles">Mobiles</Link></li>
                      </ul>
                      
                      <hr/>
                <Route path="/" exact component={Books} />
                <Route path="/Movies" component={Movies} />
                <Route path="/Mobiles" component={Mobiles} />
                </React.Fragment>
        </Router>
    );
  }
}

