
const initialState = { value: 0 }

export default(state = initialState, action) => {
    switch(action.type){
        case 'CALCULATE':
            return {
                ...state,
                value: action.payload / 4
            }
        default:
            return state;
    }
}