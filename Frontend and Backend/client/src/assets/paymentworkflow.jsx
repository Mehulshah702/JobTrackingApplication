import React, { useState } from "react";
import "./PaymentWorkflow.css";

const PaymentWorkflow = () => {
  const [step, setStep] = useState(1);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => setStep(3), 2000);
  };

  return (
    <div className="payment-container">
      {step === 1 && (
        <div className="payment-box">
          <h2>Payment Details</h2>
          <form onSubmit={handlePayment}>
            <div className="input-group">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit">Pay Now</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="loading-box">
          <div className="loader"></div>
          <p>Processing Payment...</p>
        </div>
      )}

      {step === 3 && (
        <div className="success-box">
          <div className="checkmark">✔</div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentWorkflow;
