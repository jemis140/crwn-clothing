import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HHNHjEkBya3ViobFyGU07eTdx0u2fNzGIg19ojm1UWRAjyW1jM0G19PMnBMNk61qps5fVBP6XkIBDLd9YG08F1A00o8e6SCRb';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;