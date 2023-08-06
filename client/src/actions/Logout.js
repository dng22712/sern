const Logout = () => dispatch => {
    localStorage.removeItem('Auth')
    dispatch({
        type: 'AUTH'
    })
}

export default Logout