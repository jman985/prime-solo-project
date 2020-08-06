import React from 'react';
import { connect } from 'react-redux';
// import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';

import UserBuildsItem from '../UserBuildsItem/UserBuildsItem'





class UserBuildsPage extends React.Component {

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

          {this.props.build.map(x =>
            <UserBuildsItem key={x.id} thisBuild={x}/>
          )}
    </Grid>
    </>
    );

  }
}

const mapStateToProps = state => ({
  build: state.build,
  user: state.user,
});

export default connect(mapStateToProps)(UserBuildsPage);