import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';


const getCookie = (cookieName) => {
    // Get name followed by anything except a semicolon
    const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
  }


class ReviewPage extends Component {
    state = {
        buildname: getCookie('buildname'||''),
        
      }
  componentDidMount() {
    console.log('review build mounted');
    
    this.props.dispatch({type: 'FETCH_BUILD', payload: this.props.match.params.buildId});

  }

  homeClick = ()=>{
    this.props.history.push('/home');
  }

  render() {
    return (
      <>
      <div className="container" style={{ textAlign: 'center',fontFamily:'apple'}}>
        <h1 style={{fontSize:'60px', marginTop:'120px'}}><strong>REVIEW YOUR BUILD</strong></h1>
          <br></br>
          <h1><strong>Build Name: </strong>{this.state.buildname}</h1>
          <br></br>
          <h2>Components</h2>
          <br></br>
          </div>
      <div style={{ textAlign: 'center',fontFamily: 'apple'}}>
        <ul >
            {this.props.build.filter(x => x.id > 8).map( component =>
            <> 
            <p key={component.id}><span className= "list-item">
              <strong>{component.type}</strong>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {component.name}</span>
            </p><br></br>
          </>)}
         </ul>
          <br></br>
          <br></br>
          <Button style={{ fontSize: "40px", fontFamily:'apple'}} variant="contained" size ="large" color="primary" onClick= {this.homeClick}>HOME</Button>
         </div>
    </>
    )

  }
}

const mapStateToProps = state => ({
    build: state.build,
    userBuilds: state.userBuilds,
});

export default connect(mapStateToProps)(ReviewPage);