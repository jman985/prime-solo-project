import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from "../LogOutButton/LogOutButton";
import { Link } from 'react-router-dom';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
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

class UserHomePage extends Component {


  viewBuildsHandleClick = () => {

    this.props.history.push('/builds');

  }
  newBuildHandleClick = () => {

    // this.props.dispatch({type: 'SELECT_BUILD', payload: this.props.selectBuild})
    this.props.dispatch({type: 'ADD_BUILD'})
    this.props.dispatch({type: 'FETCH_NEWBUILD'})

    console.log('this is the selected build', this.props.selectBuild);
    
    this.props.history.push('/newbuild');

    // this.props.history.push('/builder');

  }

  
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>

        <Button variant="contained" color="primary" onClick = {this.newBuildHandleClick}>Start A New Build</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       

        <Button variant="contained" color="primary" onClick = {this.viewBuildsHandleClick}>View Your Builds</Button>
        <br></br>
        <br></br>
        <br></br>

        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  newBuild: state.newBuild,
  selectBuild: state.selectBuild,
  userBuilds: state.userBuilds,
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserHomePage);
