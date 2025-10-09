import React from 'react';

const RazorpayCheckout = ({
  amount = 100, // Default ₹1 in paise
  name = "",
  email = "",
  phone = "",
  packageName = "General Payment",
  onSuccess = () => {},
  onError = () => {},
  children
}) => {
  const handlePayment = async () => {
    try {
      // Create order on backend
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const orderResponse = await fetch(`${backendUrl}/api/create-payment-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount, // Amount in paise
          currency: 'INR',
          name: name,
          email: email,
          phone: phone,
          package_name: packageName
        })
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create payment order');
      }

      const orderData = await orderResponse.json();

      // Initialize Razorpay checkout
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Pretty Planet Travels and Events',
        description: packageName,
        order_id: orderData.order_id,
        handler: async function (response) {
          try {
            // Send payment success to backend
            const successResponse = await fetch(`${backendUrl}/api/payment-success`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: orderData.amount,
                name: name,
                email: email,
                phone: phone,
                package_name: packageName
              })
            });

            if (successResponse.ok) {
              console.log('✅ Payment success processed');
              onSuccess(response);
              // Show success message
              alert('🎉 Thank you for your payment! Our team will contact you shortly.');
            } else {
              throw new Error('Failed to process payment success');
            }
          } catch (error) {
            console.error('❌ Error processing payment success:', error);
            alert('Payment successful but there was an error processing. Our team will contact you.');
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: phone
        },
        notes: {
          package: packageName
        },
        theme: {
          color: '#1e40af' // Blue theme matching website
        },
        modal: {
          ondismiss: function() {
            console.log('Payment popup closed');
          }
        }
      };

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          const rzp = new window.Razorpay(options);
          rzp.open();
        };
        script.onerror = () => {
          console.error('❌ Failed to load Razorpay script');
          alert('Payment service unavailable. Please try again later.');
        };
        document.body.appendChild(script);
      } else {
        const rzp = new window.Razorpay(options);
        rzp.open();
      }

    } catch (error) {
      console.error('❌ Payment error:', error);
      onError(error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div onClick={handlePayment} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default RazorpayCheckout;