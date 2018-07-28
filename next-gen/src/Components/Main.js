import React from 'react';
import logo from "./Logo.png";
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './component.css';

class Main extends React.Component{
  render(){
		return(
			<div className = "container form">
        <nav className = "navbar navbar-expand-lg">
          <ul className = "navbar-nav">
            <li className= "nav-item">
                  <img className= "logo" src={logo}/>
            </li>
            <li className = "nav-item">
				        Home
            </li>
            <li className = "nav-item">
                Who we are
            </li>
            <li className = "nav-item">
                Help
            </li>
          </ul>
        </nav>
			</div>
			);
	}
}

export default Main;
