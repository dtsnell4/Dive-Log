import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DiveList from '../containers/diveList';
import AddDive from '../containers/addDive';
import DiveDetails from '../containers/diveDetails';
import Home from '../containers/home';
import Background from '../images/sharks.jpg';

const Main = (props) => {

  return (
    <Router>
      <div>
        <div className="background-image" style={{backgroundImage: "url(" + Background + ")", backgroundPosition: "0% 0%"}}></div>
        <div className="position-relative">
          <nav className="navbar navbar-dark bg-primary">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" strict exact activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mydives" className="nav-link" activeClassName="active">My Dives</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adddive" className="nav-link" activeClassName="active">Add Dive</NavLink>
              </li>
            </ul>
          </nav>
          <div className="page-content">
            <Route exact path="/" component={Home} />
            <Route path="/mydives" component={DiveList} />
            <Route path="/adddive" component={AddDive} />
            <Route path="/divedetails/:divenum" component={DiveDetails} />
            <Route path="/editDive/:divenum" component={AddDive} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
