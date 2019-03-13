import _ from 'lodash';
import {call, put, takeLatest, select, all, fork } from 'redux-saga/effects'
import { STOCK_PEERS_LOAD } from './../actions/actionTypes';
import { stockPeersLoading, stockPeersLoadSuccess, stockPeersLoadFailed } from '../actions/stocksActions';
import { loadStockPeers, loadStockQuoteMetadata } from '../services/StocksApi';

function* loadStockPeersData(action) {
  try {
    yield put(stockPeersLoading());
    const stockPeersData = yield call(loadStockPeers, action.payload.stockQuoteSearchText);
    const stockPeers = stockPeersData.map((stockQuote) => {
      return {
        stockName: stockQuote,
        isStockDataLoading: true
      }
    });
    const stockQuoteMetaDataRequests = stockPeersData.map((stockQuote) => {
      return fork(loadStockQuoteMetadataInfo, stockQuote)
    });
    yield put(stockPeersLoadSuccess(stockPeers));

    yield all(stockQuoteMetaDataRequests);
  } catch (error) {
    yield put(stockPeersLoadFailed());
  }
}

function* loadStockQuoteMetadataInfo(stockName) {
  const result = yield call(loadStockQuoteMetadata, stockName);

  const stockPeers = yield select(getStockQuotes);
  let dataLoadedStock = stockPeers.find(
    stock => stock.stockName === stockName
  );
  dataLoadedStock.stockDescription = result.description;
  dataLoadedStock.isStockDataLoading = false;
  yield put(stockPeersLoadSuccess(stockPeers));
}

const getStockQuotes = (state) => {
  return _.map(state.stocksData.stocks, _.clone);
};

export function* loadStockPeersSaga() {
  yield takeLatest(STOCK_PEERS_LOAD, loadStockPeersData);
}
