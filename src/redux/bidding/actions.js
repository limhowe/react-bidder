export const SET_AUCTION_ITEM_REQUEST = 'BIDDING/SET_AUCTION_ITEM_REQUEST';
export const SET_AUCTION_ITEM_SUCCESS = 'BIDDING/SET_AUCTION_ITEM_SUCCESS';

export const PLACE_BID_REQUEST = 'BIDDING/PLACE_BID_REQUEST';
export const PLACE_BID_SUCCESS = 'BIDDING/PLACE_BID_SUCCESS';

export function setAuctionRequest(data) {
  return {
    type: SET_AUCTION_ITEM_REQUEST,
    data
  };
}

export function setAuctionItemSuccess(data) {
  return {
    type: SET_AUCTION_ITEM_SUCCESS,
    data
  };
}

export function placeBidRequest(data) {
  return {
    type: PLACE_BID_REQUEST,
    data
  };
}

export function placeBidSuccess(data) {
  return {
    type: PLACE_BID_SUCCESS,
    data
  };
}
