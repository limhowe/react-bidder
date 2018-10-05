var server = require('http').createServer();
var io = require('socket.io')(server);

const SET_AUCTION_ITEM_REQUEST = 'BIDDING/SET_AUCTION_ITEM_REQUEST';
const SET_AUCTION_ITEM_SUCCESS = 'BIDDING/SET_AUCTION_ITEM_SUCCESS';
const PLACE_BID_REQUEST = 'BIDDING/PLACE_BID_REQUEST';
const PLACE_BID_SUCCESS = 'BIDDING/PLACE_BID_SUCCESS';

// This is awful idea. but I think it works for now...
let store = {
  bids: {},
  item: {},
  topBidder: null,
};

const actionHandlers = {
  [SET_AUCTION_ITEM_REQUEST]: function({ itemname, price }) {
    store = {
      item: {
        name: itemname,
        price,
      },
      topBidder: null,
      bids: {},
    };
    io.emit('action', {
      type: SET_AUCTION_ITEM_SUCCESS,
      data: store,
    });
  },
  [PLACE_BID_REQUEST]: function({ name: bidder, price }) {
    store.bids[bidder] = { bidder, price };
    if (
      !store.topBidder ||
      (store.topBidder.bidder !== bidder &&
        Number(store.topBidder.price) < Number(price))
    ) {
      store.topBidder = { bidder, price };
    }

    io.emit('action', {
      type: PLACE_BID_SUCCESS,
      data: store,
    });
  },
};

io.on('connection', function(client) {
  client.on('action', function(data) {
    if (actionHandlers[data.type]) {
      actionHandlers[data.type](data.data);
    }
  });
  client.on('disconnect', function() {});
});

server.listen(8000);
