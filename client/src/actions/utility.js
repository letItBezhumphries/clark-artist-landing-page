import { PAYMENT_SERVER_URL, CURRENCY, STRIPE_PUBLISHABLE } from '../utils/stripeConstants';
import axios from 'axios';
import { setAlert } from './alert';


export const updateObject = (oldObj, newProps) => {
  return {
    ...oldObj,
    ...newProps
  }
};

export const processPayment = data => dispatch => {
  try {
    dispatch(setAlert('Payment Successful!', 'success'));
  } catch (err) {
    dispatch(setAlert('Payment Error', 'danger'));
  }
}

export const successPayment = data => {
  alert('Payment Successful');
}

export const errorPayment = data => {
  alert('Payment Error');
}

export const onToken = (totalAmt, items, description) => token => 
  axios.post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: totalAmt * 100
      })
  .then(successPayment)
  .catch(errorPayment);