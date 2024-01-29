import React from "react";
import ButtonCard from "../../Components/Btn/ButtonCard";
import LandingPageFooter from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { Thumbnails } from "../../Components/Thumbanails/Thumbnails";
import "./Style.css";
import Reviews from "../../Components/Reviews/Reviews"
import { useFetch } from "../../utils/useFetch";

function AccessoriesSoloProduct({ products }) {
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let product = products.find((product) => product.id === id);
  const { data, error } = useFetch(
    `https://ecoridebackend.onrender.com/api/user/getSingleProduct/${id}`,
    token
  );
   // console.log(data)
  return (
    <div className="solo-product-parent-div-accessoiers">
      <div className="solo-product-accessoiers">
        <div className="products-cont-accessoiers">
          <div className="product-img-accessoiers">
            <div className="products-mains-accessoiers">
              <Thumbnails images={data?.imageUrls} />
            </div>
          </div>

          <div className="content-card-boxx-accessoiers">
            <span className="accessoiers">Accessories</span>

            <h2 className="accessoiers-content"> {data?.title}</h2>

            <div className="box-prices-accessoiers">
              <span className="price-without-cut-accessoiers">
                {data?.price}$
              </span>
              <span>& Free Shipping</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div className="label-btn-accessoiers">
              <div >
              <input className="quantity-buttons_added-accessoiers" type="number" min={1} max={50} />
              </div>
              <ButtonCard text={"ADD TO CART "} />
            </div>
            <fieldset>
              <legend>Guaranteed Safe Checkout</legend>
              <div className="payment-methods-accessoiers">
                <img
                  src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/payment-icons.png"
                  style={{ width: "256px", height: "20px" }}
                  alt=""
                />
              </div>
            </fieldset>
            <div className="safe-accessoiers">
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

export default AccessoriesSoloProduct;
