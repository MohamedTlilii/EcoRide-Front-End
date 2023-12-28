import React from "react";
// import SaleBtn from "../Components/SaleBtn";
import ButtonCard from "../Components/ButtonCard";
import { useParams } from "react-router-dom";
import LandingPageFooter from "../Components/LandingPageFooter";
// import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function ProductsSolo({ products }) {
  let { id } = useParams();
  let product = products.find((product) => product.id === id);

  return (
    <div className="solo-product-parent-div">
    <div className="solo-product">
      <div className="products-cont">
        <div className="product-img">
          {/* <div className="icons-product">
            <SaleBtn />
            <CiSearch />
          </div> */}
          <img className="product-main" src={product.image} alt="" />
          <div className="products-mains">
            <img src={product.img1} alt="" />
            <img src={product.img2} alt="" />
            <img src={product.img3} alt="" />
            <img src={product.img4} alt="" />
          </div>
        </div>

        <div className="content-card-boxx">
          <Link to="/electricscooters">
            <span className="electric-scooters">Electric Scooters</span>
          </Link>
          <h2 className="product-content"> {product.content}</h2>

          <div className="box-prices">
            <span className="cut-price">{product.span}EGP</span>
            <span className="price6without-cut">{product.price}EGP</span>
            <span>& Free Shipping</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="label-btn">
            <div className="quantity-buttons_added">
              <label className="screen-reader-text" htmlFor="minus_qty">
                -
              </label>
              <label
                className="screen-reader-text"
                htmlFor="quantity_65882f9b538de"
              ></label>
              <input style={{ width: "25px" }}></input>
              <label className="screen-reader-text" htmlFor="plus_qty">
                +
              </label>
            </div>
            <ButtonCard text={"ADD TO CART "} />
          </div>
          <fieldset>
            <legend>Guaranteed Safe Checkout</legend>
            <div className="payment-methods">
              <img
                src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
                style={{ width: "256px", height: "20px" }}
                alt=""
              />
            </div>
          </fieldset>
          <div className="safe">
            <span> ✔️No-Risk Money Back Guarantee!</span>
            <span> ✔️No Hassle Refunds</span>
            <span> ✔️Secure Payments</span>
          </div>
        </div>
      </div>

      <div className="footer">
        <LandingPageFooter />
        <div className="last-footer">
          <p>Copyright © 2023 Electric Scooter | Powered by Electric Scooter</p>
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
