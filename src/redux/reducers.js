import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import biddingReducer from './bidding/reducer';

const reducers = combineReducers({
  bidding: biddingReducer,
  form: formReducer,
});

export default reducers;
