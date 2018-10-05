import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import User from './containers/User';
import Auctioneer from './containers/Auctioneer';

export default class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Autioneer" />
          <Tab label="Bidder 1" />
          <Tab label="Bidder 2" />
        </Tabs>

        {value === 0 && <Auctioneer />}
        {value === 1 && <User name="Bidder1" />}
        {value === 2 && <User name="Bidder2" />}
      </div>
    );
  }
}
