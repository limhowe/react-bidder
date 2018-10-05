import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import BidForm from '../components/BidForm';
import { placeBidRequest } from '../redux/bidding/actions';
import BidStat from '../components/BidStat';
import Notification from '../components/Notification';

class User extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bidState: BidStat.propTypes.item,
    placeBid: PropTypes.func,
  };

  handleBidFormSubmit = values => {
    const { name, placeBid } = this.props;
    placeBid({
      name,
      ...values
    });
  };

  _renderBidStat() {
    const { bidState } = this.props;
    return <BidStat showItemName={true} item={bidState} />;
  }

  _renderNotification(isBidHolder) {
    const notification = isBidHolder ? 'Your Bid!!!' : 'Place bid!!!';
    return <Notification title={notification} />;
  }

  render() {
    const { name, bidState: { bidder, name: itemName, price } } = this.props;
    const shouldShowNotification = itemName && bidder;
    const shouldDisableForm = !itemName || (bidder && bidder === name);

    return (
      <div>
        <h1>{name}</h1>
        {this._renderBidStat()}
        {shouldShowNotification && this._renderNotification(bidder === name)}
        <BidForm onSubmit={this.handleBidFormSubmit} minPrice={price} disabled={shouldDisableForm}/>
      </div>
    );
  }
}

// TODO: we can use selector here....
const mapStateToProps = ({ bidding: { bidState } }) => ({
  bidState,
});

const mapDispatchToProps = {
  placeBid: placeBidRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(User);
