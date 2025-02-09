import React from 'react';
import { Link } from 'react-router-dom';

const PaymentCancel = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Payment Cancelled</h1>
      <p style={styles.message}>
        Your payment has been cancelled. If this was a mistake, please try again.
      </p>
      <Link to="/payment-section" style={styles.link}>
        Return to Payment
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',       // centers horizontally
    justifyContent: 'center',   // centers vertically
    padding: '2rem',
    minHeight: '100vh',         // ensures the container takes the full viewport height
    textAlign: 'center'         // ensures text inside is centered
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem'
  },
  link: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#007BFF'
  }
};

export default PaymentCancel;
