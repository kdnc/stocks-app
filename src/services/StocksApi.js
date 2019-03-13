import {API_URL} from './Constants';
import {invokeJsonGet} from './Api';

export const loadStockPeers = (searchText) => {
  return invokeJsonGet(`${API_URL}${searchText}/peers`);
};

export const loadStockQuoteMetadata = (stockQuote) => {
  return invokeJsonGet(`${API_URL}${stockQuote}/company`);
};

export const loadStockPrice = (stockQuote, period) => {
  return invokeJsonGet(`${API_URL}${stockQuote}/chart/${period}`);
};

