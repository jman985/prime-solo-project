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


class NewBuildItem extends Component {
   

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

  editComponent = () => {

    this.props.dispatch({type: 'FETCH_COMPONENT'})
    this.props.history.push('/component');

  }

  render(){
  return (
    <>
    <Grid>
    <MDBCol>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <MDBCard
          className='card-image'
          style={{
            backgroundImage: 'url(' + this.props.thisComponent.image + ')'
              
          }}
        >
          <div className='text-black text-center d-flex align-items-center py-3 px-2'>
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
              <MDBBtn className= 'text-center' color='grey' onClick= {this.handleClick} >
                Details
              </MDBBtn>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              <MDBBtn className= 'text-center' color='deep-orange' onClick = { (event) => this.editComponent(event, this.props.thisBuild.id) }>
                <MDBIcon icon='plus' /> Add {this.props.thisComponent.name}
              </MDBBtn>
            </div>
          </div>
        </MDBCard>

        <MDBCard
          className='card-image'
          style={{
            backgroundImage: 'url(' + this.props.thisComponent.image + ')'
              
          }}
        >
            
          <div className='text-white text-center d-flex rgba-blue-strong align-items-center py-3 px-2'>
            <div>
              <MDBCardTitle tag='h3' className='pt-4'>
                <strong>{this.props.thisComponent.name}</strong>
              </MDBCardTitle>
              <p>{this.props.thisComponent.description}</p>
              <MDBBtn className= 'text-center' color='deep-orange'>
                <MDBIcon icon='plus' /> Add {this.props.thisComponent.name}
              </MDBBtn>
              <MDBBtn className= 'text-center' color='grey' onClick= {this.handleClick}>
                Cancel
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
        </ReactCardFlip>

      </MDBCol>
      <br></br>
        <br></br>
        <br></br>
              
    </Grid>
{/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Card>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Card>
 
        <Button>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Button>
      </ReactCardFlip> */}
</>
  )
}
}

const mapStateToProps = state => ({
    newBuild: state.newBuild,
    user: state.user,
  });
  
  export default withRouter(connect(mapStateToProps)(NewBuildItem));