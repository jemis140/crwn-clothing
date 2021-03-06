import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  //const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HHNHjEkBya3ViobFyGU07eTdx0u2fNzGIg19ojm1UWRAjyW1jM0G19PMnBMNk61qps5fVBP6XkIBDLd9YG08F1A00o8e6SCRb';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
        alert('succesful payment');
      }).catch(error => {
        console.log('Payment Error: ', error.response);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is Rs ${price}`}
      amount={price}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;