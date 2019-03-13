import {
  STOCK_PRICE_DATA_LOAD,
  STOCK_PRICE_DATA_LOADING,
  STOCK_PRICE_DATA_LOAD_SUCCESS,
  STOCK_PRICE_DATA_LOAD_FAILED,
} from './actionTypes';

export function loadStockPriceData(stockQuote, period) {
  return {
    type: STOCK_PRICE_DATA_LOAD,
    payload: {
      stockQuote,
      period,
      loading: true
    }
  }
}

export function loadingStockPrices(period) {
  return {
    type: STOCK_PRICE_DATA_LOADING,
    payload: {
      period,
      loading: true,
      stockPrices: []
    }
  }
}

export function loadStockPricesSuccess(stockPrices) {
  return {
    type: STOCK_PRICE_DATA_LOAD_SUCCESS,
    payload: {
      loading: false,
      stockPrices
    }
  }
}

export function loadStockPricesFailed() {
  return {
    type: STOCK_PRICE_DATA_LOAD_FAILED,
    payload: {
      loading: false
    }
  }
}