import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const BidStat = ({
  showItemName,
  item: { name, price, bidder },
}) => (
  <Card>
    <CardContent>
      {showItemName && (
        <Typography variant="headline" component="h3">
          Item: {name}
        </Typography>
      )}
      <Typography component="p">CurrentPrice : {price}</Typography>
      <Typography component="p">Bidder : {bidder}</Typography>
    </CardContent>
  </Card>
);

BidStat.propTypes = {
  showItemName: PropTypes.bool,
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    bidder: PropTypes.string,
  }),
};

export default BidStat;
