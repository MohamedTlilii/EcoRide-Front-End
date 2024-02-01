import React from "react";
import "./Style.css";
import { Button, Form, Checkbox } from "semantic-ui-react";
function Checkout() {
  return (
    <div className="Checkout">
      <div className="container">
        <form id="checkout-form">
          <h2>Checkout</h2>

          {/* Customer Information */}
          <div className="section-heading">
            <h1>Customer Information</h1>
          </div>
          <label htmlFor="username-email"></label>
          <input
            type="text"
            id="username-email"
            name="username-email"
            placeholder="Username or Email Address"
            required
          />

          {/* Billing Details */}
          <div className="section-heading">
            <h1>Billing Details</h1>
          </div>
          <div className="billing-details">
            <div className="row">
              <div className="col">
                <label htmlFor="first-name"></label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="last-name"></label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <label htmlFor="company-name"></label>
            <input
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Company Name"
            />

            <label htmlFor="country">Country:</label>
            <select id="country" name="country" required>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
              {/* Add more country options as needed */}
            </select>

            <label htmlFor="street"></label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="House number and street name"
              required
            />

            <label htmlFor="city"></label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Town / City"
              required
            />

            <label htmlFor="state"></label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              required
            />

            <label htmlFor="pin-code"></label>
            <input
              type="text"
              id="pin-code"
              name="pin-code"
              placeholder="PIN Code"
              required
            />

            <label htmlFor="phone"></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              required
            />
          </div>

          {/* Order Details */}
          <div className="order-details">
            <div className="section-heading">
              <h1>Additional Information</h1>
            </div>
            <label htmlFor="order-notes"></label>
            <textarea
              id="order-notes"
              name="order-notes"
              placeholder="Notes about your order"
            ></textarea>

            <div className="section-heading">
              <h1>Payment</h1>
            </div>

            <select id="payment-method" name="payment-method" required>
              <option value="cash-on-delivery">Cash on Delivery</option>
              <option value="Pay with cash upon delivery.">
                Pay with cash upon delivery.
              </option>
              {/* Add more payment options as needed */}
            </select>

            {/* Place Order Button */}
            <Button
              style={{
                color: "white",
                backgroundColor: "hsl(173, 95%, 42%)",
                transition: "background-color 0.3s", 
                ":hover": {
                  backgroundColor: "black",
                },
              }}
              type="submit"
              className="place-order-button"
            >
              PLACE ORDER
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
