import {
  SET_AUCTION_ITEM_REQUEST,
  SET_AUCTION_ITEM_SUCCESS,
  PLACE_BID_REQUEST,
  PLACE_BID_SUCCESS,
} from './actions';

const ACTION_HANDLERS = {
  [SET_AUCTION_ITEM_REQUEST]: (state, action) => {
    return state;
  },
  [SET_AUCTION_ITEM_SUCCESS]: (state, { data: { bids, item } }) => {
    return { ...state, bidState: {...item, price: +item.price }, bids };
  },
  [PLACE_BID_REQUEST]: (state, action) => {
    return state;
  },
  [PLACE_BID_SUCCESS]: (state, { data: { bids, item }}) => {
    return { ...state, bidState: {...item, price: +item.price }, bids };
  },
};

let defaultState = {
  bids: {},
  bidState: {}
};

export default (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
