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


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const classes = useStyles();

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
      // <div>
      //   {this.props.errors.loginMessage && (
      //     <h2
      //       className="alert"
      //       role="alert"
      //     >
      //       {this.props.errors.loginMessage}
      //     </h2>
      //   )}
      //   <form onSubmit={this.login}>
      //     <h1>Login</h1>
      //     <div>
      //       <label htmlFor="username">
      //         Username:
      //         <input
      //           type="text"
      //           name="username"
      //           value={this.state.username}
      //           onChange={this.handleInputChangeFor('username')}
      //         />
      //       </label>
      //     </div>
      //     <div>
      //       <label htmlFor="password">
      //         Password:
      //         <input
      //           type="password"
      //           name="password"
      //           value={this.state.password}
      //           onChange={this.handleInputChangeFor('password')}
      //         />
      //       </label>
      //     </div>
      //     <div>
      //       <input
      //         className="log-in"
      //         type="submit"
      //         name="submit"
      //         value="Log In"
      //       />
      //     </div>
      //   </form>
      //   <center>
      //     <button
      //       type="button"
      //       className="link-button"
      //       onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
      //     >
      //       Register
      //     </button>
      //   </center>
      // </div>


<Container component="main" maxWidth="lg">
<CssBaseline />
<div className="paper">
  <Avatar className = "avatar">
    <LockOutlinedIcon />
  </Avatar >
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
      Sign In
    </Button>
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
