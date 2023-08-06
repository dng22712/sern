function Offers(state=[], action){
    switch(action.type){
        case 'OFFERS':
            return action.payload
        case 'REMOVE_OFFER':
            return state.filter(offer => offer.id !== action.id)
        case 'ADD_OFFER':
            return [...state, {...action.payload}]
        case 'UPDATE_OFFER':
            return state.map(offer =>
                offer.id === action.payload.id
                ? {...offer, ...action.payload}
                : offer
            )
        default:
            return state
    }
}

export default Offers
