import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function PaymentButton() {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: process.env.REACT_APP_PRICE_ID, quantity: 1 }],
      mode: 'subscription',
      successUrl: window.location.origin + '/success.html',
      cancelUrl: window.location.origin,
    });
    if (error) console.error(error);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: '#635BFF',
        color: 'white',
        padding: '12px 24px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      Upgrade to Premium – $9.99/month
    </button>
  );
}

export default PaymentButton;
