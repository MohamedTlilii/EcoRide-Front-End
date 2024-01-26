import React from "react";

import ButtonCard from "../../Components/Btn/ButtonCard";
import { useParams } from "react-router-dom";
import LandingPageFooter from "../../Components/Footer/Footer";
import { Thumbnails } from "../../Components/Thumbanails/Thumbnails";

import "./style.css";
import Reviews from "../../Components/Reviews/Reviews"

function ProductsSolo({ products }) {
  let { id } = useParams();
  let product = products.find((product) => product.id === id);

  return (
    <div className="solo-product-parent-div">
      <div className="solo-product">
        <div className="products-cont">
          <div className="products-mains">
            <Thumbnails images={product.images} />
          </div>

          <div className="content-card-boxx">
            <span className="electric-scooters-scooter-accs">
              Electric Scooters
            </span>

            <h2 className="product-content-scooter-accs"> {product.title}</h2>

            <div className="box-prices-scooter-accs">
              {/* <span className="cut-price-scooter-accs">{product.span}EGP</span> */}
              <span className="price-without-cut-scooter-accs">
                {product.price}$
              </span>
              <span>& Free Shipping</span>
            </div>
            <p>{product.description}</p>
            <div className="label-btn-scooter-accs">
              <div className="quantity-buttons_added-scooter-accs">
                {/* <label className="screen-reader-text" htmlFor="minus_qty">
                  -
                </label>
                <label
                  className="screen-reader-text"
                  htmlFor="quantity_65882f9b538de"
                ></label>
                <input style={{ width: "25px" }}></input>
                <label className="screen-reader-text" htmlFor="plus_qty">
                  +
                </label> */}
                <input type="number" min={1} max={50} />
              </div>
              <ButtonCard text={"ADD TO CART "} />
            </div>
            <fieldset>
              <legend>Guaranteed Safe Checkout</legend>
              <div className="payment-methods-scooter-accs">
                <img
                  src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
                  style={{ width: "256px", height: "20px" }}
                  alt=""
                />
              </div>
            </fieldset>
            <div className="safe-scooter-accs">
              <span> ✔️No-Risk Money Back Guarantee!</span>
              <span> ✔️No Hassle Refunds</span>
              <span> ✔️Secure Payments</span>
            </div>
          </div>
        </div>
        <div className="reviews" >
         <Reviews />
         </div>

        <div className="footer">
          <LandingPageFooter />
          <div className="last-footer">
            <p>
              Copyright © 2023 Electric Scooter | Powered by Electric Scooter
            </p>
            <img
              src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
              style={{ width: "246px", height: "20px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSolo;
