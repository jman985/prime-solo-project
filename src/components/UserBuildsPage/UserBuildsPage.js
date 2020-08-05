import React from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'




class UserBuildsPage extends React.Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_BUILD', payload: this.props.user.id});
  }

  render() {
    return (
      <div>
        <h1>Your Hackintosh Builds</h1>
        <ul>
          {this.props.build.map(build => (
            <li key = {build.id}>
              {build.name}
              <br></br>
              <img src={build.case_image} alt ={build.case_name}/>
              
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  build: state.build,
  user: state.user,
});

export default connect(mapStateToProps)(UserBuildsPage);