import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TableCell, TableRow, Grid, TextField, Button} from '@material-ui/core'

import {Delete, Update} from '../actions'
import {BaseURL} from '../api'

class OfferItem extends Component{
    constructor(props){
        super(props)
        this.handle_submit = this.handle_submit.bind(this)
        this.area_code_input = React.createRef()
        this.store_name_input = React.createRef()
        this.product_name_input = React.createRef()
        this.product_detail_input = React.createRef()
        this.product_image_input = React.createRef()
        this.offer_detail_input = React.createRef()
        this.start_date_input = React.createRef()
        this.end_date_input = React.createRef()
    }
    handle_submit(){
        const area_code = this.area_code_input.current.value.trim()
        const store_name = this.store_name_input.current.value.trim()
        const product_name = this.product_name_input.current.value.trim()
        const product_detail = this.product_detail_input.current.value.trim()
        const product_image = this.product_image_input.current.files[0]
        const offer_detail = this.offer_detail_input.current.value.trim()
        const start_date = this.start_date_input.current.value.trim()
        const end_date = this.end_date_input.current.value.trim()
        this.props.onUpdate({
            id: this.props.id,
            area_code,
            store_name,
            product_name,
            product_detail,
            product_image,
            offer_detail,
            start_date,
            end_date
        })
    } 
    render(){
        return <TableRow key={this.props.id}>
            <TableCell component="th" scope="row">
                <TextField 
                    fullWidth
                    inputProps={{ref: this.product_name_input}}
                    defaultValue={this.props.Offer.product_name} 
                />
            </TableCell>
            <TableCell align="right">
                <img width="150" alt={''} src={BaseURL + this.props.Offer.image_path} />
                <input ref={this.product_image_input} type="file"/>
            </TableCell>
            <TableCell align="right">
                <TextField 
                    fullWidth 
                    inputProps={{ref: this.area_code_input}}
                    defaultValue={this.props.Offer.area_code} 
                />
            </TableCell>
            <TableCell align="right">
                <TextField 
                    fullWidth 
                    inputProps={{ref: this.store_name_input}}
                    defaultValue={this.props.Offer.store_name} 
                />
            </TableCell>
            <TableCell align="right">
                <TextField 
                    fullWidth 
                    inputProps={{ref: this.product_detail_input}}
                    defaultValue={this.props.Offer.product_detail} 
                />
            </TableCell>
            <TableCell align="right">
                <TextField 
                    fullWidth 
                    inputProps={{ref: this.offer_detail_input}}
                    defaultValue={this.props.Offer.offer_detail} 
                />
            </TableCell>
            <TableCell align="right">
                <TextField 
                    fullWidth 
                    inputProps={{ref: this.start_date_input}}
                    type="date" 
                    defaultValue={this.props.Offer.start_date} 
                />
            </TableCell>
            <TableCell align="right">
                <TextField 
                    fullWidth 
                    inputProps={{ref: this.end_date_input}}
                    type="date" 
                    defaultValue={this.props.Offer.end_date} 
                />
            </TableCell>
            <TableCell align="right">
                <Grid container spacing={3}>
                    <Grid item>
                <Button variant="contained" color="secondary" onClick={() => this.props.onDelete(this.props.id)}>Remove</Button>
                    </Grid><Grid item>
                <Button variant="contained" color="primary" onClick={this.handle_submit}>Update</Button>
                </Grid></Grid>
            </TableCell>
        </TableRow>
    }
}

const state2props = (state, ownProps) => ({
    Offer: state.Offers.find(offer => offer.id === ownProps.id)
})

const dispatch2props = dispatch => ({
    onDelete: id => {
        dispatch(Delete(id))
    },
    onUpdate: data => {
        dispatch(Update(data))
    }
})

export default connect(state2props, dispatch2props)(OfferItem)
