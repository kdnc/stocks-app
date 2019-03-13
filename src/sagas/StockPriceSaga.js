import { call, put, takeLatest } from 'redux-saga/effects'
import { STOCK_PRICE_DATA_LOAD } from './../actions/actionTypes';
import { loadingStockPrices, loadStockPricesSuccess, loadStockPricesFailed } from '../actions/stockPriceActions';
import { loadStockPrice } from '../services/StocksApi';

export function* loadStockPriceData(action) {
  try {
    yield put(loadingStockPrices(action.payload.period));
    const stockPrices = yield call(loadStockPrice, action.payload.stockQuote, action.payload.period);
    yield put(loadStockPricesSuccess(stockPrices));

  } catch (error) {
    yield put(loadStockPricesFailed());
  }
}

export function* loadStockPriceDataSaga() {
  yield takeLatest(STOCK_PRICE_DATA_LOAD, loadStockPriceData);
}