import { Link } from "react-router-dom";
import Reviews from "../../Components/Reviews/Reviews"


function ElectricScootersProducts({ image, title, price, description, id }) {
  return (
    <div>
      <div className="my-product-card">
        <Link to={`/productscooter/${id}`}>
          <img className="electric-scooter-products" src={image} alt="" />
        </Link>
      </div>
      {/* <span>{"✰".repeat(rating)}</span> */}
      <div>
        <Link to={`/productscooter/${id}`}>
          <h2
            style={{ color: "black" }}
            className="electric-scooter-products-title"
          >
            {" "}
            {title}
          </h2>
        </Link>
      </div>

      <span className="electric-scooter-products-price">{price}</span>
      <span>EGP</span>
      
    </div>
  );
}

export default ElectricScootersProducts;
