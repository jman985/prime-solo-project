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
import { IoMdSwap } from 'react-icons/io';
import { IoIosAdd } from 'react-icons/io';
import { FaExchangeAlt } from 'react-icons/fa';



class EditBuildItem extends Component {
   
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
    // this.props.dispatch({type: 'SELECT_BUILD', payload: this.props.thisComponent.build_id})
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
  };
  
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

    this.props.history.push('/builder/' + this.props.match.params.buildId + '/' + component)

  }

  render(){
  return (
    <>
  
  <Grid item xs={20} sm={8} md={5} >
    <MDBCol container spacing = {15} className= "column">
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

      {this.props.thisComponent.id > 8?

          <Card className="card-front" variant="outlined"
          style={{ textAlign: 'center'}}>
          <CardHeader title={this.props.thisComponent.name}>
          </CardHeader>
          <CardActionArea>
            <CardMedia component="img" onClick={this.handleClick}
              aria-label="Show more"
              alt={this.props.thisComponent.name}
              src={this.props.thisComponent.image}
              title={this.props.thisComponent.name}
              paragraph= {this.props.thisComponent.details}
            />
            <MDBBtn className= 'text-center' color='deep-orange' onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                      <FaExchangeAlt /> Change {this.props.thisComponent.type}
              </MDBBtn>
          </CardActionArea>
        </Card>
          :
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
                      <IoIosAdd /> Add {this.props.thisComponent.type}
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
          }

        <MDBCard
          className='card-image'
          style={{
            backgroundImage: 'url(' + this.props.thisComponent.image + ')'
              
          }}
          onClick= {this.handleClick}
        >
            
          <div className='text-white text-center d-flex align-items-center py-5 px-1'>
            <div>
              <MDBCardTitle tag='h3' className='pt-4'>
                <strong>{this.props.thisComponent.name}</strong>
              </MDBCardTitle>
                <p>{this.props.thisComponent.details}</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {this.props.thisComponent.id > 8?
                    <MDBBtn className= 'text-center' color='deep-orange' onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                      <FaExchangeAlt /> Change {this.props.thisComponent.type}
                    </MDBBtn>
                    :
                    <MDBBtn className= 'text-center' color='deep-orange' onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                      <IoIosAdd/> Add {this.props.thisComponent.type}
                    </MDBBtn>
                }
            </div>
          </div>
          </MDBCard>
        </ReactCardFlip>
       </MDBCol>
       </Grid>
 
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