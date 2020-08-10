import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";


  const Nav = (props) => (
  // <div className="nav">
  //   <Link to="/home">
  //     <h2 className="nav-title">Hackintosh Builder</h2>
  //   </Link>
  //   <div className="nav-right">
  //     <Link className="nav-link" to="/home">
  //       {/* Show this link if they are logged in or not,
  //       but call this link 'Home' if they are logged in,
  //       and call this link 'Login / Register' if they are not */}
  //       {props.user.id ? 'Home' : 'Login / Register'}
  //     </Link>
  //     {/* Show the link to the info page and the logout button if the user is logged in */}
  //     {props.user.id && (
  //       <>
  //         <Link className="nav-link" to="/builds">
  //           View Builds
  //         </Link>
  //         <LogOutButton className="nav-link"/>
  //       </>
  //     )}
  //     {/* Always show this link since the about page is not protected */}
  //     <Link className="nav-link" to="/about">
  //       About
  //     </Link>
  //   </div>
  // </div>

  <MDBNavbar color="orange" dark expand="md" style={{ marginTop: "20px" }}>
  <MDBNavbarBrand>
    <img src = "images/apple_bite.png" height = "70" alt= "hackintosh"/>
    <strong className="white-text">Hackintosh Builder</strong>
  </MDBNavbarBrand>
  
    <MDBNavbarNav left>
      
      <MDBNavItem>
      <MDBNavLink to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </MDBNavLink >      
      </MDBNavItem>

      <MDBNavItem>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        
          <MDBNavLink to="/builds">
            View Builds
          </MDBNavLink >
      
      )}
      
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
