import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from "../LogOutButton/LogOutButton";
import { Link } from 'react-router-dom';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
import { borders } from '@material-ui/system';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import './UserHomePage.css';
import { FaBox } from 'react-icons/fa';


const getCookie = (cookieName) => {
  // Get name followed by anything except a semicolon
  const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
}

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 5,
  style: { width: '700px', height: '700px' },
};

class UserHomePage extends Component {

  componentDidUpdate(prevProps){
    if(this.props.selectBuild !== prevProps.selectBuild){
      this.props.history.push('/builder/' + this.props.selectBuild);
    }
    
  }

    
  state = {
    buildname: getCookie('buildname'||''),
    buildId: getCookie('buildId'||'')
  }

  viewBuildsHandleClick = () => {

    this.props.history.push('/builds');

  }

  newBuildHandleClick = () => {
    document.cookie = `buildname=${'NO NAME'}`
    
    this.props.dispatch({type: 'ADD_BUILD'})
  
  }

  
  render() {
    return (
      <>
      <div className = 'container'>
        <h1 style={{ textAlign: 'center', marginTop: '150px', fontSize:'70px'}} id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>
        
        <Button variant="contained" color="primary" onClick = {this.newBuildHandleClick}>Start A New Build</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        <Button variant="contained" color="primary" onClick = {this.viewBuildsHandleClick}>View Your Builds</Button>
        
      </div>
    <Box display="flex" justifyContent="center">
      <Box borderRadius={16} {...defaultProps} onClick = {this.newBuildHandleClick}/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Box borderRadius={16} {...defaultProps} onClick = {this.viewBuildsHandleClick}/>
    </Box>
      </>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  build: state.build,
  newBuild: state.newBuild,
  selectBuild: state.selectBuild,
  userBuilds: state.userBuilds,
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserHomePage);
