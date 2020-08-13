import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { GiShinyApple } from 'react-icons/gi';




class LoginPage extends Component {


  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {

    return (
    
        <Container style={{marginTop:"200px"}} component="main" maxWidth="lg">
          <CssBaseline />
          <div className="paper">
            <Avatar className = "avatar">
              <GiShinyApple/>
            </Avatar >
            <br></br>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form fullWidth onSubmit={this.login}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                autoFocus
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                className = "submit"
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                name="submit">
                <strong>Sign In</strong>
              </Button>
                <br></br>
                <br></br>
              <Grid container>
                <Grid item>
                  <Link variant="body2"  type="button"
                      className="link-button"
                      onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          </Container>

    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
