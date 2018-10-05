import { all } from 'redux-saga/effects';

import biddingSaga from './bidding/saga';

export default function* root() {
  yield all([].concat(biddingSaga));
}
