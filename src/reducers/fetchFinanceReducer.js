export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_FINANCE':
            return [...state, action.payload];
        default:
            return state;
    }
};