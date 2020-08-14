import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';

import UserBuildsItem from '../UserBuildsItem/UserBuildsItem'





class UserBuildsPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_ALLBUILDS', payload: this.props.user.id});
    // console.log(this.props.match.params.id);
    window.addEventListener('resize', this.handleResize);

  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <>
         
        <h1 style={{ textAlign: 'center', marginTop: '150px', marginBottom:'50px', fontSize:'70px'}}><strong >Your Hackintosh Builds</strong></h1>
         
          {/* <p>Your ID is: {this.props.user.id}</p> */}

      <div>
    <Grid 
      container
      spacing={11}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
          {this.props.userBuilds.map(x =>
            <UserBuildsItem key={x.id} thisBuild={x}/>
          )}
    </Grid>
    </div>
    </>
    );

  }
}

const mapStateToProps = state => ({
  userBuilds: state.userBuilds,
  user: state.user,
});

export default connect(mapStateToProps)(UserBuildsPage);