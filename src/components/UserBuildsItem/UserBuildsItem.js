import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
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




class UserBuildsItem extends Component {
   
  constructor() {
    super();
      this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  removeBuild = (event, id) => {
    event.preventDefault();
    console.log('in remove item:', id);
    this.props.dispatch({type: 'REMOVE_BUILD', payload: id})
  }

  editBuild = (event, id)=> {
    event.preventDefault();
    document.cookie = `buildname=${this.props.thisBuild.name}`
    console.log('select build', id);
    this.props.dispatch({type: 'SELECT_BUILD', payload: id})
    this.props.history.push('/builder/' + id);
  }


  checkImage = () =>{

    if(this.props.thisBuild.case_image){
      return 
    }
    else{
      return 'images/apple_bite.png';
    }
  }

  render(){
  return (
    <>
    <Grid item xs={8} sm={4} md={2} >
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <Card variant="outlined"
          style={{
            textAlign: 'center'
          }}>
        <CardHeader title={this.props.thisBuild.name}>
        </CardHeader>
        <div className = "rgba-grey-strong">
        <CardActionArea>
          <CardMedia  component="img" onClick={this.handleClick} aria-expanded={this.state.expanded}
            aria-label="Show more"
            alt={this.props.thisBuild.name}
            src={this.props.thisBuild.image}
            title={this.props.thisBuild.name}
            paragraph= {this.props.thisBuild.name}
          />
        </CardActionArea>
        </div>
            <CardContent>
              <Typography paragraph></Typography>
                <Button variant="contained" color="primary" size="small" color="primary" onClick={ (event) => this.editBuild(event, this.props.thisBuild.id) }>
                Edit Build
                </Button>&nbsp;
                <Button variant="contained" color="secondary" size="small" onClick={ (event) => this.removeBuild(event, this.props.thisBuild.id) }>
                Delete Build
                </Button>
            </CardContent>
          </Card>

        <Card variant="outlined"
        style={{ textAlign: 'center',
            backgroundImage: 'url('+ this.props.thisBuild.image+')'}}>
        <CardHeader title={this.props.thisBuild.name}>
        </CardHeader>
        <CardActionArea>
          <CardMedia  component="img" onClick={this.handleClick}
            aria-label="Show more"
            alt={this.props.thisBuild.name}
            src={this.props.thisBuild.image}
            title={this.props.thisBuild.name}
          />
        </CardActionArea>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{this.props.thisBuild.name}</Typography>
            </CardContent>
          </Collapse>
          </Card>
        </ReactCardFlip>

    </Grid>
</>
  )
}
}

const mapStateToProps = state => ({
  selectBuild: state.selectBuild,
  userBuilds: state.userBuilds,
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(UserBuildsItem));