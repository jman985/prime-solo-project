import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { borders, sizing } from '@material-ui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import { Box, Grid, Slide, Paper,Typography,Dialog,DialogContent,DialogContentText,DialogTitle,DialogActions} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactCardFlip from 'react-card-flip';

const getCookie = (cookieName) => {
  // Get name followed by anything except a semicolon
  const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
}

class UserBuildsItem extends Component {
   
  state = {
    deleteDialogOpen: false
  }

  constructor() {
    super();
      this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  removeBuild = (event, id) => {
    event.preventDefault();
    console.log('in remove item:', id);
    this.props.dispatch({type: 'REMOVE_BUILD', payload: id})
    this.handleDialogClose();
  }

  editBuild = (event, id)=> {
    event.preventDefault();
    this.props.dispatch({type: 'FETCH_BUILD', payload: id});
    document.cookie = `buildname=${this.props.thisBuild.name}`
    console.log('select build', id);
    this.props.dispatch({type: 'SELECT_BUILD', payload: id})
    this.props.history.push('/builder/' + id);
  }

  handleDialogClickOpen = () => {
    this.setState({
      deleteDialogOpen: true
    })
  };

  handleDialogClose = () => {
      this.setState({
        deleteDialogOpen: false
      })
    };

  render(){
  return (
    <>
    <Grid item xs={8} sm={4} md={2} >
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <Card variant="outlined"
          style={{
            textAlign: 'center',
            marginLeft: "30px"
            ,fontFamily:'apple'
          }}>
        <CardHeader title={this.props.thisBuild.name}>
        </CardHeader>
        <div className = "rgba-grey-strong">
        <CardActionArea>
          <CardMedia  component="img" onClick={this.handleClick}
            aria-label="Show more"
            alt={this.props.thisBuild.name}
            src={this.props.thisBuild.case_id>8? this.props.thisBuild.image: "images/apple-bite2.png"}
            title={this.props.thisBuild.name}
            paragraph= {this.props.thisBuild.name}
          />
        </CardActionArea>
        </div>
            <CardContent>
              <Typography paragraph></Typography>
                <Button style={{fontFamily:'apple',fontSize: "20px"}} variant="contained" color="primary" size="small" color="primary" onClick={ (event) => this.editBuild(event, this.props.thisBuild.id) }>
                Edit Build
                </Button>&nbsp;&nbsp;&nbsp;
                <Button style={{fontFamily:'apple',fontSize: "20px"}} variant="contained" color="secondary" size="small" onClick={this.handleDialogClickOpen}>
                Delete Build
                </Button>
            </CardContent>
          </Card>
        <Card variant="outlined"
          style={{ textAlign: 'center',marginLeft: "30px",fontFamily: 'apple'}}>
        <CardHeader title= {this.props.thisBuild.name}/>
        <div className = "rgba-grey-strong">
        <CardActionArea>
          <CardMedia  component="img" onClick={this.handleClick}
            aria-label="Show more"
            alt={this.props.thisBuild.name}
            src= {this.props.thisBuild.case_id>8? this.props.thisBuild.image: "images/apple-bite2.png"}
          />
        </CardActionArea>
        </div>
            <CardContent>
            <Typography paragraph></Typography>
                <Button style={{fontFamily:'apple',fontSize: "20px"}} variant="contained" color="primary" size="small" color="primary" onClick={ (event) => this.editBuild(event, this.props.thisBuild.id) }>
                Edit Build
                </Button>&nbsp;
                <Button style={{fontFamily:'apple',fontSize: "20px"}}  variant="contained" color="secondary" size="small" onClick={this.handleDialogClickOpen} >
                Delete Build
                </Button>
            </CardContent>
          </Card>
        </ReactCardFlip>

    </Grid>
    <div>
      <Dialog
        open={this.state.deleteDialogOpen}
        onClose={this.handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this build?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={ (event) => this.removeBuild(event, this.props.thisBuild.id) } color="secondary" autoFocus>
            Yes
          </Button>
          <Button onClick={this.handleDialogClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
</>
  )
}
}

const mapStateToProps = state => ({
  selectBuild: state.selectBuild,
  userBuilds: state.userBuilds,
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(UserBuildsItem));