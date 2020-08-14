import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
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
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactCardFlip from 'react-card-flip';
import EditBuildItem from '../EditBuildItem/EditBuildItem'
import './EditBuildPage.css'
import { MdModeEdit } from 'react-icons/md';


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

  }

  componentDidMount() {

  this.props.dispatch({type: 'FETCH_BUILD', payload: this.props.match.params.buildId});

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


  render() {
    return (
      <>
      <div>
        <h1 className = "title" style={{ textAlign: 'center',marginTop: '120px'}}><strong >Build Your Hackintosh</strong></h1>
      </div>

      {/* <div className= "build-name">
              <label style={{ textAlign: 'center'}}>
                Build Name:</label>{this.state.buildnameIsEditable ?
              <input placeholder="build name" onChange = {(event)=> this.onChange(event)}/>:<p>{this.state.buildname}</p>}

            {this.state.buildnameIsEditable ?
              <Button variant="contained" color="primary" onClick={this.saveBuildName}>Save Build Name</Button> :
              <Button variant="outlined" color="primary" onClick={this.editBuildName}>Edit Build Name</Button>
            }
          
          </div> */}
      <div className="build-name">
                {this.state.buildnameIsEditable ?
              <div className="build-edit">
              <label style={{ textAlign: 'center',fontSize: "25px"}}>NAME YOUR BUILD:</label>
              <input placeholder="build name" onChange = {(event)=> this.onChange(event)}/>
              <Button variant="contained" color="primary" onClick={this.saveBuildName}>Save Build Name</Button>
              </div>
              : 
              <div className="build-display">
                <label style={{ textAlign: 'center',fontSize: "25px"}}>{this.state.buildname} </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="outlined" color="secondary" onClick={this.editBuildName}><MdModeEdit/>Edit Build Name</Button>
              </div>
                }
        </div>
              
<div className= "container">
   <Grid 
   container
   spacing={16}
   direction="row"
   justify="space-between"
   alignItems="flex-start"
   
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

<div className= "horizontal-center">
    <Button style={{ fontSize: "40px"}} variant="contained" size ="large" color="primary" onClick = {this.reviewBuildClick}>COMPLETE BUILD AND REVIEW</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <Button variant="contained" color="secondary" >DELETE BUILD AND START OVER</Button> */}
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