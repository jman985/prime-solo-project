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
import './ComponentItem.css'


class ComponentItem extends Component {
  
  
state = {
        componentSelected: false,
        componentId: 0
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

  selectComponent = () => {
    this.setState({
      componentSelected: true
    });
    
  this.props.dispatch({type: 'SELECT_COMPONENT', 
                        payload: { component_id: this.props.thisComponent.id,
                          build_id: this.props.match.params.buildId,
                          type: this.props.thisComponent.type
                                }})
  }


  deSelectComponent = ()=>{
    this.setState({
      componentSelected: false
    });

    this.props.dispatch({type: 'SELECT_COMPONENT', payload: {component_id: 0, build_id: this.props.match.params.buildId,
      type: ''}})
    }

  

  render(){
  return (
    <>
    <Grid item xs={9} sm={5} md={3}>
    <MDBCol>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Card >
        <CardHeader title={this.props.thisComponent.name}>
        </CardHeader>
        <CardActionArea>
            
          <CardMedia component="img" onClick={this.handleClick} aria-expanded={this.state.expanded}
            aria-label="Show more"
            alt={this.props.thisComponent.name}
            src={this.props.thisComponent.image}
            title={this.props.thisComponent.name}
            paragraph= {this.props.thisComponent.details}
          />
        </CardActionArea>
            <CardContent>
              <Typography paragraph></Typography>
              {this.state.componentSelected ?
              <Button variant="contained" color="secondary" size="small" onClick = {this.deSelectComponent}>
              REMOVE</Button>
              :
                <Button variant="contained" color="primary" size="small" color="primary" onClick = {this.selectComponent}>
                SELECT THIS {this.props.thisComponent.type} </Button> 
                
                }
            </CardContent>
          </Card>

        <MDBCard
          className='card-image'
          style={{
            backgroundImage: 'url(' + this.props.thisComponent.image + ')'
              
          }}
          onClick={this.handleClick} 
        >
            
          <div className='text-white text-center d-flex rgba-blue-strong align-items-center py-4 px-2'>
            <div>
              <MDBCardTitle tag='h3' className='pt-4'>
                <strong>{this.props.thisComponent.name}</strong>
              </MDBCardTitle>
              <p>{this.props.thisComponent.details}</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </MDBCard>
        </ReactCardFlip>

      </MDBCol>
      <br></br>
        <br></br>
        <br></br>
              
    </Grid>

</>
  )
}
}

const mapStateToProps = state => ({
    selectComponent: state.selectComponent,
    selectBuild: state.selectBuild,
    selectBuild: state.selectBuild,
    buildComponent: state.buildComponent,
    newBuild: state.newBuild,
    user: state.user,
  });
  
  export default withRouter(connect(mapStateToProps)(ComponentItem));