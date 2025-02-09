import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51Qp9zvLfpECkoc7po2n8vEHl8C9LMJzY1Vc4MMEUYHLDd8pUGFqc3JmrAg3scG0UgiQ9dYzhmE0bDRo9xNi1ECZg008SnPUMWQ');

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      fontFamily: 'Arial, sans-serif',
      '::placeholder': { color: '#aab7c4' },
    },
    invalid: { color: '#9e2146' },
  },
};

const PaymentContainer = styled.div`
  max-width: 450px;
  margin: 50px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PayButton = styled.button`
  background: #5469d4;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #4558b4;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

function PaymentForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStripePayment = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements || !clientSecret) {
      setErrorMessage('Payment system is not ready. Please try again later.');
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        setErrorMessage(error.message);
        navigate('/paymentcancel');
      } else if (paymentIntent?.status === 'succeeded') {
        alert('✅ Payment successful!');
        navigate('/paymentsuccess');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred.');
      navigate('/paymentcancel');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <StyledForm onSubmit={handleStripePayment}>
      <Input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
      <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
      <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <PayButton type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay with Stripe'}
      </PayButton>
    </StyledForm>
  );
}

export default function PaymentSection() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 10000 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Fetch Error:', error));
  }, []);

  return (
    <PaymentContainer>
      <h2>💳 Payment Options</h2>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
      )}
    </PaymentContainer>
  );
}
