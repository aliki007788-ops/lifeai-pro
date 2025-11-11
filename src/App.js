import React from 'react';
import PaymentButton from './PaymentButton';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>LifeAI Pro</h1>
      <p>Upgrade to Premium – $9.99/month</p>
      <PaymentButton />
    </div>
  );
}

export default App;
