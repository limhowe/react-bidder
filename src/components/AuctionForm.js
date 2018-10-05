import React from 'react';
import PropTypes from 'prop-types'
import { reduxForm, Field, formPropTypes } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';

const validate = (values, props) => {
  const errors = {};
  const { minPrice } = props;

  if (!values.itemname) {
    errors.itemname = 'Required';
  } else if (values.itemname.length > 3) {
    errors.itemname = 'Must be 3 characters or less';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number';
  } else if (Number(values.price) < minPrice) {
    errors.price = `Sorry, must be at least ${minPrice}`;
  }
  return errors;
};

let AuctionForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="itemname" component={TextField} placeholder="Item" />
      <Field name="price" component={TextField} placeholder="Starting Price" />
      <Button variant="outlined" type="submit">
        Set
      </Button>
    </form>
  );
};

AuctionForm.propTypes = {
  minPrice: PropTypes.number.isRequired
} & formPropTypes;

AuctionForm = reduxForm({
  form: 'auctionForm',
  validate,
})(AuctionForm);

export default AuctionForm;
