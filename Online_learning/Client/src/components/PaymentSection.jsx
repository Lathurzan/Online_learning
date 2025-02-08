import React, { useEffect, useState } from 'react';
import GooglePayButton from '@google-pay/button-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Qp9zvLfpECkoc7po2n8vEHl8C9LMJzY1Vc4MMEUYHLDd8pUGFqc3JmrAg3scG0UgiQ9dYzhmE0bDRo9xNi1ECZg008SnPUMWQ');

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

function PaymentForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStripePayment = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setErrorMessage(error.message);
        console.error('[Payment Error]', error);
      }

      if (paymentIntent?.status === 'succeeded') {
        alert('Payment successful!');
        // Add redirect or success state update here
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred.');
      console.error('[Unexpected Error]', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleStripePayment}>
      <div className="stripe-card-element" style={{ margin: '20px 0' }}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      {errorMessage && (
        <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>
      )}
      <button 
        type="submit" 
        disabled={!stripe || isProcessing}
        style={{
          background: '#5469d4',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isProcessing ? 'Processing...' : 'Pay with Stripe'}
      </button>
    </form>
  );
}

export default function PaymentSection() {
  const [clientSecret, setClientSecret] = useState('');
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create payment intent');
        }
        return response.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.error('Fetch Error:', error);
        setFetchError(error.message);
      });
  }, []);

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="payment-buttons">
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'stripe',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: '1234567890',
              merchantName: 'Demo Merchant',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: '100.00',
              currencyCode: 'USD',
              countryCode: 'US',
            },
          }}
          onLoadPaymentData={paymentRequest => console.log('Payment Data:', paymentRequest)}
          onPaymentAuthorized={paymentData => {
            console.log('Authorized Payment:', paymentData);
            return { transactionState: 'SUCCESS' };
          }}
          buttonColor="black"
          buttonType="Buy"
        />
      </div>

      {fetchError && (
        <div style={{ color: 'red', margin: '20px 0' }}>
          Error loading payment options: {fetchError}
        </div>
      )}

      {clientSecret && (
        <div style={{ marginTop: '30px' }}>
          <Elements stripe={stripePromise}>
            <PaymentForm clientSecret={clientSecret} />
          </Elements>
        </div>
      )}
    </div>
  );
}