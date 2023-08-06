import {API} from '../api'

const Login = ({email, password}, history, react_component) => dispatch => {
    API.post('login', {
        email,
        password
    })
    .then(res => {
        let Auth = {
            isAuthenticated: true,
            token: res.data.token
        }
        console.log(Auth)
        localStorage.setItem('Auth', JSON.stringify(Auth))
        dispatch({
            type: 'AUTH',
            payload: Object.assign({}, Auth)
        })
        history.push('/')
    })
    .catch(err => {
        let Auth = {
            isAuthenticated: false,
            token: ''
        }
        react_component.setState(state => ({ErrMsg: err.message}))
        localStorage.setItem('Auth', JSON.stringify(Auth))
        dispatch({
            type: 'AUTH',
            payload: Object.assign({}, Auth)
        })
    })
}

export default Login