import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
    Paper,
    Button,
    Typography,
    SnackbarContent,
    TextField, 
    Grid} from '@material-ui/core'

import useStyles from '../App.style'
import {Login as LoginAction} from '../actions'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            ErrMsg: ''
        }
        this.email_input = React.createRef()
        this.password_input = React.createRef()
        this.handle_submit = this.handle_submit.bind(this)
    }
    handle_submit(){
        const email = this.email_input.current.value.trim()
        const password = this.password_input.current.value.trim()
        if(email && password){
            this.setState({ErrMsg: ''})
            this.props.onLogin({
                email,
                password
            }, this.props.history, this)
        } else{
            this.setState({ErrMsg: 'Please provide all the parameters'})
        }
    }/*
    render(){
        return <div>
              {
                  this.state.ErrMsg
                  ? <div>{this.state.ErrMsg}</div>
                  : <div/>
              }
              <input placeholder="Email" ref={this.email_input} />
              <input type="password" placeholder="Password" ref={this.password_input} />
              <button onClick={this.handle_submit}>
                Login
              </button>
              
                You can test with the <b>Email: visitor@abc.com, Password: 123</b>, and also try with empty and invalid Credentials.
              
            </div>
    }*/
    render(){
        const classes = this.props.classes
        return (<React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Login
          </Typography>
          <React.Fragment>
          <Grid container spacing={3}>
        {
            this.state.ErrMsg
            ? <Grid item xs={12}>
            <SnackbarContent
                color="inherit"
                className={classes.margin}
                message={this.state.ErrMsg}
            />
            </Grid>
            : <div />
        }
        <Grid item xs={12}>
          <TextField
            required
            type="email"
            name="email"
            label="Email"
            defaultValue="visitor@abc.com"
            inputProps={{ref: this.email_input}}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="password"
            name="password"
            label="Password"
            defaultValue="123"
            inputProps={{ref: this.password_input}}
            fullWidth
          />
        </Grid> 
      </Grid>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handle_submit}
                    className={classes.button}
                  >
                    Login
                  </Button>
                </div>
          </React.Fragment>
        </Paper>
      </main></React.Fragment>)
    }
}

const dispatch2props = dispatch => ({
    onLogin: (data, history, react_component) => {
        dispatch(LoginAction(data, history, react_component))
    }
})

Login = withRouter(connect(null, dispatch2props)(Login))

const Style2Props = props => {
    const classes = useStyles()
    return <Login classes={classes} />
}

export default Style2Props