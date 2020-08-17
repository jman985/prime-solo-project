import React, { Component,Fragment } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { borders, sizing, fontWeight, width, shadows, fontSize } from '@material-ui/system';
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
    marginLeft: '20px',
    color:'white',
    paddingTop: '40px',
    fontSize: '65px',
    fontFamily: 'apple',
    fontWeight:'bold'
  },

  changeButton:{
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
  },

  mdbButton:{
    textAlign: 'center',
    fontFamily:'apple',
    fontSize: "18px",
    margin: 'auto',
  },
  
});


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
    const {classes} = this.props;

  return (
    <>
  <Grid item xs={10} sm={5} md={4} >

    {this.props.thisComponent.id > 8?
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Card className={classes.frontCard} variant="outlined">
          <CardHeader title={this.props.thisComponent.name}>
          </CardHeader>
          <CardActionArea>
            <CardMedia component="img" onClick={this.handleClick} className={classes.Media}
              aria-label="Show more"
              alt={this.props.thisComponent.name}
              src={this.props.thisComponent.image}
              title={this.props.thisComponent.name}
              paragraph= {this.props.thisComponent.details}
            />
          </CardActionArea>
            <MDBBtn rounded className={classes.changeButton} color='deep-orange' onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
              <FaExchangeAlt /> Change {this.props.thisComponent.type}
            </MDBBtn>
        </Card>
      
      <MDBCard
         className='card-image'
         style={{ backgroundImage: 'url(' + this.props.thisComponent.image + ')',
         margin: 'auto'
         }}
         onClick= {this.handleClick}>
          <MDBCardTitle className={classes.backTitle}>
           {this.props.thisComponent.name}
          </MDBCardTitle>
               <br></br>
               <br></br>
               <p className={classes.Details}>{this.props.thisComponent.details}</p>
               <br></br>
               <br></br>
               <div className={classes.mdbButton}>
                   <MDBBtn className={classes.mdbButton} color='deep-orange' 
                     onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                     <FaExchangeAlt /> Change {this.props.thisComponent.type}
                   </MDBBtn>  
                   </div>             
          </MDBCard>
          

       </ReactCardFlip>
          :
            <MDBCard
                className='component-default-front'
                style={{
                  backgroundImage: 'url(' + this.props.thisComponent.image + ')',
                  margin:'auto'
                }}
                onClick= {this.handleClick}
              >
                
                  <MDBCardTitle className={classes.cardTitle} >
                    {this.props.thisComponent.name}
                  </MDBCardTitle>
                    <br></br>
                    <br></br>
                    <p className={classes.Details}>{this.props.thisComponent.details}</p>
                    <br></br>
                    <br></br>
                    <div className={classes.mdbButton}>
                      <MDBBtn className={classes.mdbButton} variant="contained" color= "primary"
                         onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                      <IoIosAdd /> Add {this.props.thisComponent.type}
                    </MDBBtn>
                    </div>
              </MDBCard>
          }
       </Grid>
 
</>
  )
}
}

EditBuildItem.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    buildComponent: state.buildComponent,
    selectBuild: state.selectBuild,
    newBuild: state.newBuild,
    user: state.user,
  });
  
  export default withStyles(styles)(connect(mapStateToProps)(withRouter(EditBuildItem)));