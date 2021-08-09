import myApi from "../apis/myApi"
import _ from 'lodash'

export const calculate = formValues => {
    return {
        type: 'CALCULATE',
        payload: formValues.sum
    }
}

export const fetchHealthCare = id => async dispatch => {
    _fetchHealthCare(id, dispatch);
}
const _fetchHealthCare = _.memoize(async (id, dispatch) => {
    const response = await myApi.get(`/HealthCare/${id}` );

    dispatch({
        type: 'FETCH_HEALTHCARE',
        payload: response.data
    });
})
export const fetchConsumerGoods = id => async dispatch => {
    _fetchConsumerGoods(id, dispatch);
}
const _fetchConsumerGoods = _.memoize(async (id, dispatch) => {
    const response = await myApi.get(`/ConsumerGoods/${id}`);

    dispatch({
        type: 'FETCH_CONSUMER_GOODS',
        payload: response.data
    });
})
    

export const fetchEnergy = id => async dispatch => {
    _fetchEnergy(id, dispatch);
}
const _fetchEnergy = _.memoize(async (id, dispatch) => {
    const response = await myApi.get(`/Energy/${id}`);

    dispatch({
        type: 'FETCH_ENERGY',
        payload: response.data
    });
})
export const fetchFinance = id => async dispatch => {
    _fetchFinance(id, dispatch);
}
const _fetchFinance= _.memoize(async (id, dispatch) => {
    const response = await myApi.get(`/Finance/${id}`);

    dispatch({
        type: 'FETCH_FINANCE',
        payload: response.data
    });
})