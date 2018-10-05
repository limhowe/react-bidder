import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

let Notification = ({ title }) => (
  <Paper elevation={1}>
    <Typography variant="headline" component="h3">
      {title}
    </Typography>
  </Paper>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;
