import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { compose } from 'redux';
import AuctionForm from '../components/AuctionForm';
import { setAuctionRequest } from '../redux/bidding/actions';
import BidStat from '../components/BidStat';

class Auctioneer extends Component {
  static propTypes = {
    bidState: BidStat.propTypes.item,
    setAuctionItem: PropTypes.func
  }

  handleAuctionFormSubmit = values => {
    const { setAuctionItem } = this.props;
    setAuctionItem(values);
  };

  _renderBidStat() {
    const { bidState } = this.props;
    return <BidStat showItemName={true} item={bidState}/>
  }

  render() {
    return (
      <div>
        <h1>Auctioneer!</h1>
        <AuctionForm onSubmit={this.handleAuctionFormSubmit} minPrice={2} />
        {this._renderBidStat()}
      </div>
    );
  }
}

// TODO: we can use selector here....
const mapStateToProps = ({ bidding: { bidState } }) => ({
  bidState,
});

const mapDispatchToProps = {
  setAuctionItem: setAuctionRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(Auctioneer);
