import React from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'




class BuilderList extends React.Component {


  
  render() {
    return (
      <div>
        <h1>Build Your Hackintosh</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
  user: state.user,
});

export default connect(mapStateToProps)(BuilderList);