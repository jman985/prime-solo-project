import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
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
import ComponentItem from '../ComponentItem/ComponentItem'
import NewBuildItem from '../NewBuildItem/NewBuildItem';

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


class ComponentPage extends Component {

  componentDidMount() {

    console.log('component page mounted, component page for', this.props.match.params.componentName)

    this.props.dispatch({type: 'FETCH_COMPONENT', payload: this.props.match.params.componentName});

  }


  render() {
    return (
      <>
      <div>
        <h1><strong>Select Your {this.props.match.params.componentName}</strong></h1>
      </div>
      <br></br>
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
   alignItems="flex-start">


   <MDBRow container spacing = {50}>
       {this.props.buildComponent.filter(x => x.id > 8).map( y =>
         <ComponentItem key={y.id} thisComponent={y}/>
       )}
       </MDBRow>

 </Grid>
 </div>
<br></br>
<br></br>
<br></br>

 <Button variant="contained" color="primary" >SAVE AND RETURN</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <Button variant="contained" color="secondary" >CANCEL</Button>

 </>
 
    )
  }
}

const mapStateToProps = state => ({
buildComponent: state.buildComponent,
build: state.build,
selectBuild: state.selectBuild,
userBuild: state.userBuild,
newBuild: state.newBuild,
user: state.user,
});

export default withRouter(connect(mapStateToProps)(ComponentPage));

