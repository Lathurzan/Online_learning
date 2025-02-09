import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Payment Successful</h1>
      <p style={styles.message}>
        Your payment was processed successfully. Thank you for your purchase!
      </p>
      <Link to="/library" style={styles.link}>
        Go to the Library
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    marginTop: '3rem'
  },
  title: {
    fontSize: '2rem',
    color: 'green',
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

export default PaymentSuccess;
