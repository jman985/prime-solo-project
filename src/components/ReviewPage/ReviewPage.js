import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';





class ReviewPage extends Component {

  componentDidMount() {
    console.log('review build mounted');
    
    this.props.dispatch({type: 'FETCH_BUILD', payload: this.props.match.params.buildId});

  }

  

  render() {
    return (
      <>
            <br></br>
            <br></br>
        <h1><strong>REVIEW YOUR BUILD</strong></h1>
          <br></br>
          <br></br>
        <ul>
          {this.props.build.map( component =>
        <> <li key={component.id}><strong>{component.type}</strong>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {component.name}</li><br></br></>)}
        

         </ul>
         <br></br>
          <br></br>
         <Button variant="contained" color="primary" >HOME</Button>

    </>
    )

  }
}

const mapStateToProps = state => ({
    build: state.build,
    userBuilds: state.userBuilds,
    user: state.user,
});

export default connect(mapStateToProps)(ReviewPage);