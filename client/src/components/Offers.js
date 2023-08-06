import React, {Component} from 'react';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Grid, TextField, Button} from '@material-ui/core'

import {Offers as OffersAction} from '../actions'
import AppNav from './AppNav'
import OfferItem from './OfferItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

class Offers extends Component{
    constructor(props){
        super(props)
        this.state = {
            search_text: ''
        }
        this.search_input = React.createRef()
    }
    componentDidMount(){
        this.props.onOffers()
    }
    render(){
        const classes = this.props.classes
  return (<div>
    <AppNav />
    <Paper className={classes.root}><br/>
      <Grid container spacing={3}>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
          <TextField
            name="search"
            label="Search"
            inputProps={{ref: this.search_input}}
            fullWidth
          />
      </Grid><Grid item xs={3}>
        <Button
            variant="contained"
            color="primary"
            onClick={() =>
                this.setState(state => ({
                    search_text: this.search_input.current.value.trim()
                }))
            }
            className={classes.button}
        >
          Search
        </Button>
      </Grid></Grid>
      <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Product Photo</TableCell>
            <TableCell align="right">Area Code</TableCell>
            <TableCell align="right">Store Name</TableCell>
            <TableCell align="right">Product Detail</TableCell>
            <TableCell align="right">Offer Detail</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell aligh="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              this.props.Offers.filter(offer => 
                  Object.values(offer).join(',').includes(this.state.search_text)
              ).map(offer =>
                  <OfferItem id={offer.id} />
              )
              
          }
        </TableBody>
      </Table>
    </Paper></div>
  );
}
  }

const dispatch2props = dispatch => ({
    onOffers: () => {
        dispatch(OffersAction())
    }
})

const state2props = ({Offers}) => ({
    Offers
})

Offers = connect(state2props, dispatch2props)(Offers)

const Style2Props = props => {
    const classes = useStyles()
    return <Offers classes={classes} />
}

export default Style2Props

