import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: process.env.REACT_APP_PRICE_ID, quantity: 1 }],
      mode: 'subscription',
      successUrl: window.location.origin + '/success.html',
      cancelUrl: window.location.origin + '/',
    });

    if (error) console.error(error);
    setLoading(false);
  };

  return (
    <button onClick={handlePayment} disabled={loading} style={{
      padding: '14px 28px', background: '#635BFF', color: 'white',
      border: 'none', borderRadius: '10px', fontSize: '18px', cursor: 'pointer'
    }}>
      {loading ? 'در حال انتقال...' : 'Upgrade to Premium – $9.99/month'}
    </button>
  );
}