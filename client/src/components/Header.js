import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = ( props ) => (
      <div className = "header">
        <h1 className = "header__title"> { props.title } </h1>
        <div className = "header__nav">
          
          <NavLink 
            activeClassName = "selected" 
            activeStyle = {
              {
                fontWeight: "bold",
                color: "var(--dark-blue)"
              }
            } 
            className = "active"
            exact = { true }
            to = "/"  
          >Draft Menu
          </NavLink>
         
          <span> | </span>
          
          <NavLink 
            activeClassName = "selected" 
            activeStyle = {
              {
                fontWeight: "bold",
                color: "var(--dark-blue)"
              }
            }
            className = "inactive"
            exact = { true }
            to = "/browseBeer" 
          >Browse Beer
          </NavLink>

        </div>
      </div>
);

export default Header;