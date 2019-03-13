import { loadStockPeersSaga } from './StocksSaga';
import { loadStockPriceDataSaga } from './StockPriceSaga';
import { all } from 'redux-saga/effects';

/**
 * Root saga registered for the application
 */
export default function* rootSaga() {
  yield all([
    loadStockPeersSaga(),
    loadStockPriceDataSaga()
  ])
}