import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import stocksReducer from './stocksReducer';
import stockPriceReducer from './stockPriceReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  searchBarData: searchReducer,
  stocksData: stocksReducer,
  stockPriceData: stockPriceReducer,
});

export default rootReducer;