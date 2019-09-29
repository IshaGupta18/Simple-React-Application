import React, { Component } from 'react';
//stateless functional component, since it doesn't have a state, butt it works, we don't need a class for it
const NavBar = (props) => {
    return (  <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar
        <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
        </a>
      </nav>);
}

// class NavBar extends Component {
//     render() { 
        
//     }
    // to communicate between two components which don't have a parent-cgild relationship, we need to lift the state up, so we take counters' state to it's parent ie App component,and and then communicate by passing it to all kids using prop ie move counters' state to parent ie App component
// }
 
export default NavBar;