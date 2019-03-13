import {
  STOCK_PEERS_LOAD,
  STOCK_PEERS_LOADING,
  STOCK_PEERS_LOAD_SUCCESS,
  STOCK_PEERS_LOAD_FAILED
} from './actionTypes';

export function stockPeersLoad(stockQuoteSearchText) {
  return {
    type: STOCK_PEERS_LOAD,
    payload: {
      stockQuoteSearchText
    }
  }
}

export function stockPeersLoading() {
  return {
    type: STOCK_PEERS_LOADING,
    payload: {
      loading: true,
      stocks: []
    }
  }
}

export function stockPeersLoadSuccess(stocks) {
  return {
    type: STOCK_PEERS_LOAD_SUCCESS,
    payload: {
      loading: false,
      stocks
    }
  }
}

export function stockPeersLoadFailed(stocks) {
  return {
    type: STOCK_PEERS_LOAD_FAILED,
    payload: {
      loading: false,
      stocks: []
    }
  }
}