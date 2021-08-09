import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form'
import calculateReducer from './calculateReducer';
import fetchCGreducer from './fetchCGreducer';
import fetchEnergyReducer from './fetchEnergyReducer';
import fetchFinanceReducer from './fetchFinanceReducer';
import fetchHCreducer from './fetchHCreducer';


export default combineReducers({
    form: form,
    calculate: calculateReducer,
    healthCare: fetchHCreducer,
    energy: fetchEnergyReducer,
    finance: fetchFinanceReducer,
    consumerGoods: fetchCGreducer
});