import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
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
import './EditBuildItem.css'



class EditBuildItem extends Component {
   
  componentDidMount(){
    this.props.dispatch({type: 'SELECT_BUILD', payload: this.props.thisComponent.build_id})
  }

  constructor() {
    super();
      this.state = {
      isFlipped: false, 
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  gotoComponent = (event, component) => {
    event.preventDefault();
    // this.props.dispatch({type: 'FETCH_COMPONENT', payload: component});
  this.props.match.params.buildId?
    this.props.history.push('/builder/' + this.props.match.params.buildId + '/' + component):
    this.props.history.push('/builder/' + this.props.thisComponent.build_id + '/' + component);


  }

  render(){
  return (
    <>
  
  <Grid item xs={9} sm={5} md={3}>
    <MDBCol>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <MDBCard
          className='card-image'
          style={{
            backgroundImage: 'url(' + this.props.thisComponent.image + ')',
            textAlign: 'center'
          }}
          onClick= {this.handleClick}
        >
          <div className='text-black text-center rgba-grey-strong d-flex align-items-center py-5 px-1'>
            <div>
              <MDBCardTitle tag='h1' className='pt-4'>
              </MDBCardTitle>
              <h2 className= 'text-center'><strong>{this.props.thisComponent.name}</strong></h2>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              {/* <MDBBtn className= 'text-center' color='grey' onClick= {this.handleClick} >
                Details
              </MDBBtn> */}
              <MDBBtn className= 'text-center' color='deep-orange' onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                <MDBIcon icon='plus' /> Add {this.props.thisComponent.type}
              </MDBBtn>
            </div>
          </div>
        </MDBCard>

        <MDBCard
          className='card-image'
          style={{
            backgroundImage: 'url(' + this.props.thisComponent.image + ')'
              
          }}
          onClick= {this.handleClick}
        >
            
          <div className='text-white text-center d-flex rgba-blue-strong align-items-center py-5 px-1'>
            <div>
              <MDBCardTitle tag='h3' className='pt-4'>
                <strong>{this.props.thisComponent.name}</strong>
              </MDBCardTitle>
              <p>{this.props.thisComponent.details}</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <MDBBtn className= 'text-center' color='deep-orange' onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                <MDBIcon icon='plus' /> Add {this.props.thisComponent.type}
              </MDBBtn>
              {/* <MDBBtn className= 'text-center' color='grey' onClick= {this.handleClick}>
                Cancel
              </MDBBtn> */}
            </div>
          </div>
        </MDBCard>
        </ReactCardFlip>
       </MDBCol>
       </Grid>

      <br></br>
        <br></br>
        <br></br> 
</>
  )
}
}

const mapStateToProps = state => ({
    buildComponent: state.buildComponent,
    selectBuild: state.selectBuild,
    newBuild: state.newBuild,
    user: state.user,
  });
  
  export default withRouter(connect(mapStateToProps)(EditBuildItem));