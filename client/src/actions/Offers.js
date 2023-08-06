import {API} from '../api'
import Logout from './Logout'

const Offers = () => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${getState().Auth.token}`
        }
    }

    API.get('api/offers', config)
    .then(res => {
        console.log(res.data)
        dispatch({
            type: 'OFFERS',
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch(Logout())
    })
}

export default Offers
