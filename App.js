import PaymentButton from './PaymentButton';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '60px', fontFamily: 'Arial' }}>
      <h1>LifeAI Pro</h1>
      <p>هوش مصنوعی شخصی – پرداخت دلاری</p>
      <PaymentButton />
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        پرداخت امن با Stripe | هر ماه $9.99
      </p>
    </div>
  );
}

export default App;