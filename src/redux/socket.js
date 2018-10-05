import {
  SET_AUCTION_ITEM_SUCCESS,
  setAuctionItemSuccess,
  PLACE_BID_SUCCESS,
  placeBidSuccess,
} from './bidding/actions';

const ACTION_GETTER = {
  [SET_AUCTION_ITEM_SUCCESS]: setAuctionItemSuccess,
  [PLACE_BID_SUCCESS]: placeBidSuccess
};

export default (store, data) => {
  const action = ACTION_GETTER[data.type];
  if (action) {
    store.dispatch(action(data.data))
  }
};