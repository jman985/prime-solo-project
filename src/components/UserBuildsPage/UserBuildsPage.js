import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';

import UserBuildsItem from '../UserBuildsItem/UserBuildsItem'





class UserBuildsPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_BUILD', payload: this.props.user.id});
  }

  

  render() {
    return (
      <>
        <h1>Your Hackintosh Builds</h1>
          <br></br>
          <br></br>

        <Grid 
      container
      spacing={10}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >

          {this.props.userBuild.map(x =>
            <UserBuildsItem key={x.id} thisBuild={x}/>
          )}
    </Grid>
    </>
    );

  }
}

const mapStateToProps = state => ({
  userBuild: state.userBuild,
  user: state.user,
});

export default connect(mapStateToProps)(UserBuildsPage);