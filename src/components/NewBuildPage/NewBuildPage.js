import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { borders } from '@material-ui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactCardFlip from 'react-card-flip';
import NewBuildItem from '../NewBuildItem/NewBuildItem'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const getCookie = (cookieName) => {
  // Get name followed by anything except a semicolon
  const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
}


class NewBuildPage extends Component {

  state = {
    buildname: getCookie('buildname'||''),
    buildnameIsEditable: false,
    // build_id: getCookie('build_id')
  }

  componentDidMount() {

    console.log('buildpage mounted', this.props.selectBuild );

    // document.cookie = `build_id=${build_id}`

    this.props.dispatch({type: 'FETCH_BUILD', payload: this.props.selectBuild});

  }

  

  editUsername = () => {

    this.setState({
      buildnameIsEditable: true,
    });
  }

  onChange= (event) => {
    event.preventDefault();

    const buildname = event.target.value;

    document.cookie = `buildname=${buildname}`

    this.setState({
      buildname: buildname,
    });
  }

  saveUsername = () => {

    this.setState({
      buildnameIsEditable: false,
    });
  }

  render() {
    return (
      <>
      <div>
        <h1><strong>Build Your Hackintosh</strong></h1>
      </div>
      <br></br>
              {/* <p>
                Build Name:{this.state.buildnameIsEditable ?
              <input placeholder="build name" onChange = {(event)=> this.onChange(event)}/>:<p>{this.state.buildname}</p>}
           
            {this.state.buildnameIsEditable ?
              <button onClick={this.saveUsername}>Save Build Name</button> :
              <button onClick={this.editUsername}>Edit Build Name</button>
            }
          </p> */}
          {/* <h1>{this.props.build[0].build_name}</h1> */}
          <br></br>
              <br></br>
              <br></br>
              <br></br>
              
<div>
   <Grid 
   container
   spacing={10}
   direction="row"
   justify="flex-start"
   alignItems="flex-start"
 >
   {/* {this.props.newBuild.filter(x => x.id > 1).map( y =>
         <NewBuildItem key={y.id} thisComponent={y}/>
       )} */}

   <MDBRow container spacing = {50}>
       {this.props.build.map( y =>
         <NewBuildItem key={y.id} thisComponent={y}/>
       )}
       </MDBRow>
 </Grid>
 </div>
<br></br>
<br></br>
<br></br>

 <Button variant="contained" color="primary" >COMPLETE BUILD AND REVIEW</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <Button variant="contained" color="secondary" >DELETE BUILD AND START OVER</Button>

 </>
 
    )
  }
}

const mapStateToProps = state => ({
build: state.build,
selectBuild: state.selectBuild,
userBuild: state.userBuild,
newBuild: state.newBuild,
user: state.user,
});

export default connect(mapStateToProps)(NewBuildPage);