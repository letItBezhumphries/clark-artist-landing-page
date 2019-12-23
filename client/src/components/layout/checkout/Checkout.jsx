// import React, { Fragment, useEffect } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// // import { STRIPE_PUBLISHABLE, CURRENCY } from '../../../utils/stripeConstants';
// // import { onToken } from '../../../actions/utility';

// export const Checkout = ({ match, order, loadOrder, paymentSuccess, paymentFail, onToken, account: { cart }, ...props }) => {
//   // useEffect(() => {
//   //   loadOrder(match.params.orderId)
//   // }, [])
  
//   return (
//     <Fragment>
//       <StripeCheckout>

//       </StripeCheckout>
//     </Fragment>
//   )
// }

// Checkout.propTypes = { 
//   loadOrder: PropTypes.func.isRequired,
//   order: PropTypes.object.isRequired,
//   paymentSuccess: PropTypes.func.isRequired,
//   paymentFail: PropTypes.func.isRequired,
//   onToken: PropTypes.func.isRequired,
//  };

// const mapStateToProps = state => ({
//   order: state.order,
//   account: state.account
// });

// export default withRouter(connect(mapStateToProps, { loadOrder })(Checkout));