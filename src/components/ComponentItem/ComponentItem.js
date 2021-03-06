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

const styles = theme => ({
  frontCard: {
    width: 400,
    height:400,
    margin: 'auto',
    textAlign: 'center',
    fontFamily:'apple', 
    borderColor: '#3f51b5'
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
  },
  Details:{
    color:'white',
    textAlign: 'center',
    fontSize:'18px'
  },
  backTitle:{
    textAlign: 'center', 
    color:'white',
    paddingTop: '50px',
    fontSize: '40px',
    fontFamily: 'apple',
    fontWeight:'bold'
  }
});


class ComponentItem extends Component {

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
  };
  
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
    const {classes} = this.props;

  return (
    <>
  <Grid item xs={9} sm={5} md={3}>
    <MDBCol container spacing = {50}>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Card className= {classes.frontCard} variant="outlined">
        <CardHeader title={this.props.thisComponent.name}>
        </CardHeader>
        <CardActionArea>
          <CardMedia component="img" className={classes.Media} onClick={this.handleClick}
            aria-label="Show more"
            alt={this.props.thisComponent.name}
            src={this.props.thisComponent.image}
            title={this.props.thisComponent.name}
            paragraph= {this.props.thisComponent.details}
          />
          </CardActionArea>
              <Typography paragraph></Typography>
              {this.state.componentSelected ?
              <Button className={classes.Button} variant="contained" color="secondary" size="small" onClick = {this.deSelectComponent}>
              REMOVE</Button>
              :
                <Button className={classes.Button} variant="contained" color="primary" size="small" color="primary" onClick = {this.selectComponent}>
                SELECT</Button> 
                }
          </Card>

        <MDBCard variant="outlined"
          className='card-image'
          style={{
            backgroundImage: 'url(' + this.props.thisComponent.image + ')'
              
          }}
          onClick={this.handleClick} 
        >
            
          <div className='text-white text-center align-items-center pl-80 px-10'>
            <div>
              <MDBCardTitle className= {classes.backTitle}>
                <strong>{this.props.thisComponent.name}</strong>
              </MDBCardTitle>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p className={classes.Details}>{this.props.thisComponent.details}</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
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

ComponentItem.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    selectComponent: state.selectComponent,
    selectBuild: state.selectBuild,
    selectBuild: state.selectBuild,
    buildComponent: state.buildComponent,
    newBuild: state.newBuild,
    user: state.user,
  });
  
  export default withStyles(styles)(connect(mapStateToProps)(withRouter(ComponentItem)));