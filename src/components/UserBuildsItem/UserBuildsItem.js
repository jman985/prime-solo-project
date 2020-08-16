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

const styles = theme => ({
  frontCard: {
    width: 400,
    height:400,
    margin: 'auto',
    textAlign: 'center',
    fontFamily:'apple', 
  },
  Media: {
    height: 240,
    objectFit: 'contain'
  },
  backCard:{
    width: 400,
    height:400,
    margin: 'auto',
    textAlign: 'center',
    fontFamily:'apple', 
  },
  cardTitle: {
    textAlign: 'center',
    marginLeft: '20px'
  },
  Button:{
    textAlign: 'center',
    fontFamily:'apple',
    fontSize: "18px"
  }
});

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
    const {classes} = this.props;

  return (
    <>
    <Grid item xs={9} sm={4} md={3} >
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <Card variant="outlined" className={classes.frontCard}>
        <CardHeader title={this.props.thisBuild.name}>
        </CardHeader>
        <CardActionArea>
          <CardMedia  component="img" onClick={this.handleClick} className={classes.Media}
            aria-label="Show more"
            alt={this.props.thisBuild.name}
            src={this.props.thisBuild.case_id>8? this.props.thisBuild.image: "images/apple-bite2.png"}
            title={this.props.thisBuild.name}
            paragraph= {this.props.thisBuild.name}
            
          />
        </CardActionArea>
            <CardContent>
              <Typography paragraph></Typography>
                <Button className={classes.Button} variant="contained" color="primary" size="small" color="primary" onClick={ (event) => this.editBuild(event, this.props.thisBuild.id) }>
                Edit Build
                </Button>&nbsp;&nbsp;&nbsp;
                <Button className={classes.Button} variant="contained" color="secondary" size="small" onClick={this.handleDialogClickOpen}>
                Delete Build
                </Button>
            </CardContent>
          </Card>
        <Card variant="outlined"
          className={classes.frontCard}>
        <CardHeader title= {this.props.thisBuild.name}/>
        <CardActionArea>
          <CardMedia  component="img" onClick={this.handleClick} className={classes.Media}
            aria-label="Show more"
            alt={this.props.thisBuild.name}
            src= {this.props.thisBuild.case_id>8? this.props.thisBuild.image: "images/apple-bite2.png"}
          />
        </CardActionArea>
            <CardContent>
            <Typography paragraph></Typography>
                <Button className={classes.Button} variant="contained" color="primary" size="small" color="primary" onClick={ (event) => this.editBuild(event, this.props.thisBuild.id) }>
                Edit Build
                </Button>&nbsp;
                <Button className={classes.Button} variant="contained" color="secondary" size="small" onClick={this.handleDialogClickOpen} >
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

UserBuildsItem.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectBuild: state.selectBuild,
  userBuilds: state.userBuilds,
  user: state.user,
});

export default withStyles(styles)(connect(mapStateToProps)(withRouter(UserBuildsItem)));