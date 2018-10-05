import { fork, takeLatest } from 'redux-saga/effects';
import { sendAction } from '../../service/server';

import { SET_AUCTION_ITEM_REQUEST, PLACE_BID_REQUEST } from './actions';

function setAuctionItem(action) {
  sendAction(action);
}

function placeBid(action) {
  sendAction(action);
}

export default [
  fork(takeLatest, SET_AUCTION_ITEM_REQUEST, setAuctionItem),
  fork(takeLatest, PLACE_BID_REQUEST, placeBid),
];
