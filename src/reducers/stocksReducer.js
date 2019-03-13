import {
  STOCK_PEERS_LOADING,
  STOCK_PEERS_LOAD_SUCCESS,
  STOCK_PEERS_LOAD_FAILED
} from '../actions/actionTypes';

const initialState = {
  stocks: [],
  loading: false
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_PEERS_LOADING:
      return {...state, ...action.payload};
    case STOCK_PEERS_LOAD_SUCCESS:
      return {...state, ...action.payload};
    case STOCK_PEERS_LOAD_FAILED:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default stocksReducer;