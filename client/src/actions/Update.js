import {API} from '../api'
import Logout from './Logout'

const Update = ({id, area_code, store_name, product_name, product_detail, product_image, offer_detail, start_date, end_date}) => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${getState().Auth.token}`
        }
    }
    const form_data = new FormData()
    form_data.append('area_code', area_code)
    form_data.append('store_name', store_name)
    form_data.append('product_name', product_name)
    form_data.append('product_detail', product_detail)
    form_data.append('product_image', product_image)
    form_data.append('offer_detail', offer_detail)
    form_data.append('start_date', start_date)
    form_data.append('end_date', end_date)

    API.put(`api/offers/${id}`, form_data, config)
    .then(res => {
        console.log(res.data)
        dispatch({
            type: 'UPDATE_OFFER',
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch(Logout())
    })
}

export default Update
