const initialAuth = {
    isAuthenticated: false,
    token: ''
}

function Auth(state=initialAuth, action){
    switch(action.type){
        case 'AUTH':
            if(action.payload === undefined){
                return initialAuth
            } else{
                return action.payload
            }
        default:
            return state
    }
}

export default Auth