import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DiveList from '../containers/diveList';
import AddDive from '../containers/addDive';
import DiveDetails from '../containers/diveDetails';
import Background from '../images/sharks.jpg';


import Contacts from '../containers/contacts';


const Main = (props) => {
  // const {
  //   goBack,
  //   submitting,
  //   loaded,
  //   invalid,
  //   saveBuilding,
  //   handleSubmit,
  //   showBannerName,
  // } = props;

  const Home = (props) => {
    return (
      <div className="container">
        <h2 className="text-shadow text-white mt-3">Welcome to the My Dive Log App</h2>
        <p className="text-shadow text-white">Add a dive by clicking the button above </p>
      </div>
    )
  };

  // const rndm = Math.random(100) * 100 - 100;
  // console.log(rndm);

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

            <Route path="/contacts" component={Contacts} />

          </div>
        </div>
      </div>
    </Router>
  );
}


// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default Main;
