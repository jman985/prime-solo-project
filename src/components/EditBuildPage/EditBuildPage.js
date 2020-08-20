import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { borders, sizing, positions } from '@material-ui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import { Box, Grid, Slide, Paper, Typography, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactCardFlip from 'react-card-flip';
import EditBuildItem from '../EditBuildItem/EditBuildItem'
import './EditBuildPage.css'
import { MdModeEdit,MdAdd} from 'react-icons/md';
import { IoIosSave } from 'react-icons/io';


const getCookie = (cookieName) => {
  // Get name followed by anything except a semicolon
  const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
}


class EditBuildPage extends Component {

  state = {
    buildname: getCookie('buildname'||''),
    buildnameIsEditable: false,
    deleteDialogOpen: false

  }

  componentDidMount() {

  this.props.dispatch({type: 'FETCH_BUILD', payload: this.props.match.params.buildId});

  }
  componentWillUnmount(){
    this.props.dispatch({type: 'UNSET_BUILD'});
  }
  
  editBuildName = () => {
    this.setState({
      buildnameIsEditable: true,
    });
  }

  onChange= (event) => {
    event.preventDefault();

    const newbuildname = event.target.value;

    document.cookie = `buildname=${newbuildname}`

    this.setState({
      buildname: newbuildname,
    });
    
  }

  saveBuildName = () => {
    this.props.dispatch({type: 'UPDATE_NAME', payload: {name: this.state.buildname,
                                                        build_id: this.props.match.params.buildId,}})
    this.setState({
      buildnameIsEditable: false,
    });
  }

  reviewBuildClick = () =>{
    this.props.history.push('/review/' + this.props.match.params.buildId);
  }

  removeBuild = (event) => {
    event.preventDefault();
    console.log('in remove item:', this.props.match.params.buildId);
    this.props.dispatch({type: 'REMOVE_BUILD', payload: this.props.match.params.buildId})
    this.handleDialogClose();
    this.props.history.push('/home');
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

  render() {
    return (
      <>
      <div>
        <h1 className = "title" style={{ textAlign: 'center', marginTop: '120px', fontFamily: 'apple'}}>
          <strong >Build Your Hackintosh</strong></h1>
      </div>

        <div className="build-name">
                {this.state.buildnameIsEditable ?
              <div className="build-edit">
                
                <TextField id="outlined-basic" label="Name your build" variant="outlined" onChange = {(event)=> this.onChange(event)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button style={{ textAlign: 'center',fontSize: "20px",fontFamily:'apple', position: 'absolute'}} variant="contained" color="primary" onClick={this.saveBuildName}>
                  <IoIosSave/>&nbsp;Save Build Name</Button>
              </div>
              : 
              <div className="build-display">
                
                <label style={{ textAlign: 'center',fontSize: "25px",fontFamily:'apple'}}>{this.state.buildname} </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{ textAlign: 'center',fontSize: "20px", fontFamily:'apple'}} variant="outlined" color="primary" onClick={this.editBuildName}><MdModeEdit/>
              Add/Edit Build Name</Button>
              </div>
                }
        </div>
              
<div >
   <Grid 
   container
   spacing={10}
   direction="row"
   justify="space-evenly"
   alignItems="flex-start"
   position="absolute"
 >
   {/* {this.props.newBuild.filter(x => x.id > 1).map( y =>
         <NewBuildItem key={y.id} thisComponent={y}/>
       )} */}
  
       {this.props.build.map( y =>
         <EditBuildItem key={y.id} thisComponent={y}/>
       )}
       
 </Grid>
 </div>
<br></br>
<br></br>
<br></br>

<div style={{textAlign:'center', marginTop: '100px'}}>
    <Button style={{ fontSize: "40px",fontFamily:'apple'}} variant="contained" size ="large" color="primary" onClick = {this.reviewBuildClick}>
      REVIEW AND PRINT</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button style={{ fontSize: "40px",fontFamily:'apple'}} variant="contained" size ="large" color="secondary" onClick={this.handleDialogClickOpen} >
      DELETE AND START OVER</Button>
</div>

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
        <Button onClick={ (event) => this.removeBuild(event) } color="secondary" autoFocus>
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
build: state.build,
selectBuild: state.selectBuild,
userBuild: state.userBuild,
newBuild: state.newBuild,
user: state.user,
});

export default connect(mapStateToProps)(EditBuildPage);