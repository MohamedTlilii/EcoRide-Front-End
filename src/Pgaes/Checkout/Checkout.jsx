import React from "react";
import "./Style.css";

function Checkout() {
  return (
    <div className="Checkout">
      <div className="container">
        <form id="checkout-form">
          <h2>Checkout</h2>

          {/* Customer Information */}
          <div className="section-heading">Customer Information</div>
          <label htmlFor="username-email">Username or Email Address:</label>
          <input
            type="text"
            id="username-email"
            name="username-email"
            required
          />

          {/* Billing Details */}
          <div className="section-heading">Billing Details</div>
          <div className="billing-details">
            <div className="row">
              <div className="col">
                <label htmlFor="first-name">First Name:</label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div className="col">
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
            </div>

            <label htmlFor="company-name">Company Name:</label>
            <input type="text" id="company-name" name="company-name" />

            <label htmlFor="country">Country:</label>
            <select id="country" name="country" required>
              <option value="india">India</option>
              {/* Add more country options as needed */}
            </select>

            <label htmlFor="street">House number and street name:</label>
            <input type="text" id="street" name="street" required />

            <label htmlFor="apartment">
              Apartment, suite, unit, etc. (optional):
            </label>
            <input type="text" id="apartment" name="apartment" />

            <label htmlFor="city">Town / City:</label>
            <input type="text" id="city" name="city" required />

            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" required />

            <label htmlFor="pin-code">PIN Code:</label>
            <input type="text" id="pin-code" name="pin-code" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          {/* Order Details */}
          <div className="order-details">
            <div className="section-heading">Additional Information</div>
            <label htmlFor="order-notes">Notes about your order:</label>
            <textarea id="order-notes" name="order-notes"></textarea>

            <div className="section-heading">Payment</div>
            <label htmlFor="payment-method">Payment Method:</label>
            <select id="payment-method" name="payment-method" required>
              <option value="cash-on-delivery">Cash on Delivery</option>
              {/* Add more payment options as needed */}
            </select>

            {/* Place Order Button */}
            <button type="submit" className="place-order-button">
              PLACE ORDER $750.00
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
