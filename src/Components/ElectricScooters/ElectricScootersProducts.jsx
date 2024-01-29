import { Link } from "react-router-dom";

function ElectricScootersProducts({
  imageUrls,
  title,
  price,
  description,
  _id,
}) {
  return (
    <div>
      <div className="my-product-card">
        <Link to={`/productscooter/${_id}`}>
          <img
            className="electric-scooter-products"
            src={imageUrls[0]}
            alt=""
          />
        </Link>
      </div>
      {/* <span>{"✰".repeat(rating)}</span> */}
      <div>
        <Link to={`/productscooter/${_id}`}>
          <h2
            style={{ color: "#05cfb7" }}
            className="electric-scooter-products-title"
          >
            {" "}
            {title}
          </h2>
        </Link>
      </div>

      <span>$</span>
      <span className="electric-scooter-products-price">{price}</span>
    </div>
  );
}

export default ElectricScootersProducts;
