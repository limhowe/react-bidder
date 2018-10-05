import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, formPropTypes } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';

const validate = (values, props) => {
  const errors = {};
  const { minPrice } = props;

  if (!values.price) {
    errors.price = 'Required';
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number';
  } else if (Number(values.price) < minPrice) {
    errors.price = `Sorry, must be at least ${minPrice}`;
  }
  return errors;
};

let BidForm = props => {
  const { handleSubmit, disabled } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="price" component={TextField} placeholder="Bid Price" />
      <Button disabled={disabled} type="submit" variant="outlined">
        Place Bid
      </Button>
    </form>
  );
};

BidForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  minPrice: PropTypes.number.isRequired,
} & formPropTypes;

BidForm = reduxForm({
  form: 'bidForm',
  validate,
})(BidForm);

export default BidForm;
