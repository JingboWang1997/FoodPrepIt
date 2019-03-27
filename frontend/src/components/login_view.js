import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import green from '@material-ui/core/colors/green';
import fire from '../config/firebase';
import DashboardView from './dashboard_view';

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
			loggedin: this.props.loggedin,
			// login errors
			loginError: false,
			// register errors
			passwordLengthError: false,
			// register success
			registerSuccess: false,

		};
	}

	// called when the login button is clicked
	loginButtonCallback = (e) => {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
			this.setState({ 
				loggedin: true,
			});
			this.props.loginStateCallback(true);
	    }).catch((error) => {
	        console.log(error);
	        this.setState({ 
				loginError: true,
			});
	      });
	}

	// called when the register button is clicked
	registerButtonCallback = (e) => {
		e.preventDefault();
		if (this.state.password.length < 6) {
			this.setState({ 
				passwordLengthError: true,
			});
		} else {
			this.setState({ 
				passwordLengthError: false,
				registerSuccess: true,
			});
		}
		
		fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
	    }).then((u)=>{console.log(u);})
	    .catch((error) => {
	        console.log(error);
	      });
	}

	// called when the logout button is clicked
    logoutButtonCallback = (e) => {
    	e.preventDefault();
    	fire.auth().signOut();
    	console.log('logout.');	
    	this.setState({ 
    		loggedin: false,
    	});
    	this.props.loginStateCallback(false);
    }

    render() {
    	const { classes } = this.props;

    	if (this.state.loggedin){
    		return (
    			<DashboardView logoutButtonCallback = {this.logoutButtonCallback}/>	
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
				    
				    {this.state.loginError? (<div><h5 style={{color:'red'}}>Wrong email / password.</h5></div>) 
				      : this.state.passwordLengthError? (<div><h5 style={{color:'red'}}>Password length needs to be at least 6 charactors.</h5></div>)
				      : this.state.registerSuccess? (<div><h5 style={{color:'green'}}>Registered successfully. Please sign in now.</h5></div>)    
				      : (<div><h5>Please sign in or create an account</h5></div>)}

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