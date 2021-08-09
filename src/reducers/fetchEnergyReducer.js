export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ENERGY':
            return [...state, action.payload];
        default:
            return state;
    }
};