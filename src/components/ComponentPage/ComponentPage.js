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
import ComponentItem from '../ComponentItem/ComponentItem'
import EditBuildItem from '../EditBuildItem/EditBuildItem';
import './ComponentPage.css'

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
    fontSize: "40px",
    fontFamily:'apple'
  }
});

const getCookie = (cookieName) => {
  const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
  return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
}


class ComponentPage extends Component {
  
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    
    console.log('component page mounted, component page for', this.props.match.params.componentName)

    this.props.dispatch({type: 'FETCH_COMPONENT', payload: this.props.match.params.componentName});

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.props.dispatch({type: 'UNSET_COMPONENT'});
  }

  handleResize = () => {
    this.forceUpdate();
  }
  cancelClick = ()=>{
    this.props.history.push('/builder/' + this.props.match.params.buildId)
  }

    saveComponent = ()=> {

    this.props.dispatch({type: this.props.selectComponent.type === 'CPU'? 'UPDATE_CPU' :
    this.props.selectComponent.type === 'CPU Cooler'? 'UPDATE_COOLER':
    this.props.selectComponent.type === 'Motherboard'? 'UPDATE_MOBO':
    this.props.selectComponent.type === 'Case'? 'UPDATE_CASE':
    this.props.selectComponent.type === 'GPU'? 'UPDATE_GPU':
    this.props.selectComponent.type === 'Storage'? 'UPDATE_STORAGE':
    this.props.selectComponent.type === 'Memory'? 'UPDATE_MEMORY':
      'UPDATE_PSU', payload: this.props.selectComponent});

    this.props.history.push('/builder/' + this.props.match.params.buildId);

    }


  render() {
    const {classes} = this.props;

    return (

      <>
      <div>
        <h1 className= "title" style={{ textAlign: 'center', marginTop: '150px', marginBottom:'30px', fontSize:'70px', fontFamily: 'apple'}}>
          <strong>Select Your {this.props.match.params.componentName}</strong></h1>
      </div>
      
              
          <div className = '.container'>
            <Grid 
            container
            spacing={10}
            direction="row"
            justify="center"
            alignItems="flex-start">

                {this.props.buildComponent.filter(x => x.id > 8).map( y =>
                  <ComponentItem key={y.id} thisComponent={y}/>
                )}
          </Grid>
          </div>


      <div style={{textAlign:'center',marginTop: '100px'}}>
        <Button className= {classes.Button} variant="contained" color="primary" onClick = {this.saveComponent}>
            SAVE AND RETURN</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className= {classes.Button} variant="contained" color="secondary" onClick = {this.cancelClick} >
        CANCEL</Button>
    </div>

 </>
     )
  }
}

ComponentPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
selectComponent: state.selectComponent,
buildComponent: state.buildComponent,
build: state.build,
selectBuild: state.selectBuild,
userBuild: state.userBuild,
newBuild: state.newBuild,
user: state.user,
});


export default withStyles(styles)(connect(mapStateToProps)(withRouter(ComponentPage)));

