import React from "react";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="payment-container">
      {/* Order Summary Section */}
      <div className="order-summary">
        <div className="progress-bar">
          <div className="step completed">✔</div>
          <div className="step active"></div>
          <div className="step"></div>
        </div>
        <h2>Order Summary</h2>
        <div className="summary-details">
          <p>ORDER SUBTOTAL <span>$46.95</span></p>
          <p>SHIPPING & HANDLING <span>$6.00</span></p>
          <p>SALES TAX <span>$8.05</span></p>
          <hr />
          <p className="total">PAYMENT DUE <span className="amount">$61.00</span></p>
        </div>
        <a href="#" className="return-link">Return to cart</a>
      </div>

      {/* Payment Details Section */}
      <div className="payment-details">
        <div className="payment-header">
          <div className="payment-method">
            <span className="visa">VISA</span>
            <span className="paypal">PayPal</span>
          </div>
          <h2>Payment Details</h2>
        </div>
        <form>
          <label>Cardholder Name</label>
          <input type="text" placeholder="Alexis Johnson" />

          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3456" />

          <div className="row">
            <div>
              <label>Expiration Date</label>
              <div className="exp-date">
                <input type="text" placeholder="06" />
                <input type="text" placeholder="18" />
              </div>
            </div>
            <div>
              <label>CVV</label>
              <input type="text" placeholder="•••" />
            </div>
          </div>

          <label>Billing Address</label>
          <input type="text" placeholder="25 Bloor St E, Toronto, ON" />

          <div className="checkbox">
            <input type="checkbox" id="same-address" />
            <label htmlFor="same-address" style={{width:"200px"}}>Same as shipping address</label>
          </div>

          <button type="submit" className="next-btn">NEXT</button>
          <a href="/findwork" className="cancel-link">Cancel</a>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
