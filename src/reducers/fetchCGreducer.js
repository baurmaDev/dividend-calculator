export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_CONSUMER_GOODS':
            return [...state, action.payload];
        default:
            return state;
    }
};