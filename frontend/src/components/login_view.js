import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import green from '@material-ui/core/colors/green';

const styles = theme => ({
  main: {
    marginTop: '7%',
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LoginView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password:'',
			// 'logedin' indicates whether user has logged in
			loggedin: false,
			loginError: false,
		};
	}

	// called when the login button is clicked
	loginButtonCallback = (e) => {
		e.preventDefault();
		if (this.state.email === 'fpiadmin@gmail.com' && this.state.password === 'password') {
			this.setState({ 
				loggedin: true,
			});
		} 
		else {
			this.setState({ 
				loginError: true,
			});
		}
	}

	render() {
		const { classes } = this.props;

		if (this.state.loggedin){
			return (
				<div>
					<h1> You are Logged in </h1>
				</div>		
			);
		} else {
			return (
				<main className={classes.main}>
				  <CssBaseline />
				  <Paper className={classes.paper}>
				    <Avatar className={classes.avatar}>
				      <LockOutlinedIcon />
				    </Avatar>
				    <Typography component="h1" variant="h5">
				      Sign in / Register
				    </Typography>
				    {this.state.loginError ? (
				        <div><h5 style={{color:'red'}}>Wrong email / password.</h5></div>
				    ) : (
				        <div>
				        	<h5>Please sign in or create an account</h5>
				        </div>
				    )}

				    <form className={classes.form}>
				      <FormControl margin="normal" required fullWidth>
				        <InputLabel htmlFor="email">Email Address</InputLabel>
				        <Input id="email" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
				      </FormControl>
				      <FormControl margin="normal" required fullWidth>
				        <InputLabel htmlFor="password">Password</InputLabel>
				        <Input name="password" type="password" id="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
				      </FormControl>
				      <Button
				        type="submit"
				        fullWidth
				        variant="contained"
				        style={{ backgroundColor: green[300]}}
				        className={classes.submit}
				        onClick={this.loginButtonCallback}
				      >
				        Sign in
				      </Button>
				      <Button
				        type="submit"
				        fullWidth
				        variant="contained"
				        style={{ backgroundColor: green[300]}}
				        className={classes.submit}
				        onClick={this.registerButtonCallback}
				      >
				        Register
				      </Button>
				    </form>
				  </Paper>
				</main>
			);
		}
	}
}


export default withStyles(styles)(LoginView);