export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_HEALTHCARE':
            return [...state, action.payload];
        default:
            return state;
    }
};