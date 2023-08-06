import {API} from '../api'
import Logout from './Logout'

const Delete = id => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${getState().Auth.token}`
        }
    }

    API.delete(`api/offers/${id}`, config)
    .then(res => {
        console.log(res.data)
        dispatch({
            type: 'REMOVE_OFFER',
            id: res.data.id
        })
    })
    .catch(err => {
        console.log(err)
        dispatch(Logout())
    })
}

export default Delete
