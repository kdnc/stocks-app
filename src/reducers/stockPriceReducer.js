import {
  STOCK_PRICE_DATA_LOADING,
  STOCK_PRICE_DATA_LOAD_SUCCESS,
  STOCK_PEERS_LOAD_FAILED
} from '../actions/actionTypes';

const initialState = {
  stockPrices: [],
  period: '1m',
  loading: false
};

const stockPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_PRICE_DATA_LOADING:
      return {...state, ...action.payload};
    case STOCK_PRICE_DATA_LOAD_SUCCESS:
      return {...state, ...action.payload};
    case STOCK_PEERS_LOAD_FAILED:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default stockPriceReducer;