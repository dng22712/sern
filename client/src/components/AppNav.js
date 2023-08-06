import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Logout} from '../actions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppNav = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="sticky" color="default" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
                <Link to="/"><Button color="inherit">Home</Button></Link>
            </Typography>
            <Link to="/upload"><Button color="inherit">Upload</Button></Link>
            <Button color="inherit" onClick={props.onLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      </div>
  );
}

const state2props = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

const dispatch2props = dispatch => ({
    onLogout: () => {
        dispatch(Logout())
    }
})

export default connect(state2props, dispatch2props)(AppNav)