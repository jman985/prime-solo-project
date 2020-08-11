import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";


  const Nav = (props) => (

  <MDBNavbar className = "nav-bar" dark expand="md">
    <MDBNavbarBrand className= "apple-logo">
      <img  src = "images/apple-bite2.png" height = "100" alt= "apple-bite" />&nbsp;
      </MDBNavbarBrand>
     <MDBNavbarBrand className= "nav-brand"> <strong className = "black-text" 
          >Hackintosh Builder</strong></MDBNavbarBrand>
    
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <MDBNavbarNav left className= "nav-left">
      
      <MDBNavItem>
        <MDBNavLink className= "nav-link" to="/home">
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {props.user.id ? 'Home' : 'Login / Register'}
        </MDBNavLink >      
      </MDBNavItem>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <MDBNavItem>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        
          <MDBNavLink to="/builds">
            View Builds
          </MDBNavLink >
      
      )}
      </MDBNavItem>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <MDBNavItem>
          <MDBNavLink to="/about">About</MDBNavLink>
      </MDBNavItem>

    </MDBNavbarNav>
    {props.user.id && (
      <>
    <MDBNavbarNav right>
        <MDBNavItem>
            <LogOutButton/>
        </MDBNavItem>
      </MDBNavbarNav>
      </>
      )}
</MDBNavbar>

);





// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
