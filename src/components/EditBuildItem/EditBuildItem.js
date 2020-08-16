import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { borders, sizing, fontWeight, width, shadows } from '@material-ui/system';
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
    textAlign: 'center'

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
  <Grid item xs={10} sm={8} md={5} >
    <MDBCol container spacing = {10} className= "column">
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

    {this.props.thisComponent.id > 8?

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
            <MDBBtn className={classes.changeButton} color='deep-orange' onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
              <FaExchangeAlt /> Change {this.props.thisComponent.type}
            </MDBBtn>
        </Card>
          :
            <MDBCard
                className='component-default-front'
                style={{
                  backgroundImage: 'url(' + this.props.thisComponent.image + ')',
                }}
                onClick= {this.handleClick}
              >
                
                  <MDBCardTitle className={classes.cardTitle} >
                    {this.props.thisComponent.name}
                  </MDBCardTitle>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                      <MDBBtn className={classes.addButton} color='deep-orange'
                         onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                      <IoIosAdd /> Add {this.props.thisComponent.type}
                    </MDBBtn>
              </MDBCard>
          }

        <MDBCard
          className='card-image'
          style={{ backgroundImage: 'url(' + this.props.thisComponent.image + ')'
          }}
          onClick= {this.handleClick}
        >
            
              <MDBCardTitle className={classes.backTitle}>
                {this.props.thisComponent.name}
              </MDBCardTitle>
                <br></br>
                <br></br>
                <p className={classes.Details}>{this.props.thisComponent.details}</p>
                <br></br>
                <br></br>
                
                {this.props.thisComponent.id > 8?
                    <MDBBtn className={classes.changeButton} color='deep-orange' 
                      onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                      <FaExchangeAlt /> Change {this.props.thisComponent.type}
                    </MDBBtn>
                    :
                    <MDBBtn className={classes.addButton} color='deep-orange' 
                      onClick = { (event) => this.gotoComponent(event, this.props.thisComponent.type) }>
                      <IoIosAdd/> Add {this.props.thisComponent.type}
                    </MDBBtn>
                }
           </MDBCard>
        </ReactCardFlip>
       </MDBCol>
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