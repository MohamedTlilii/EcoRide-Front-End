import { Link } from "react-router-dom";

function ElectricScootersProducts({
  imageUrls,
  title,
  price,
  _id,
}) {
  return (
    <div>
      <div className="my-product-card">
        <Link to={`/product/${_id}`}>
          <img
            className="electric-scooter-products"
            src={imageUrls[0]}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to={`/product/${_id}`}>
          <h2
            style={{ color: "#05cfb7" }}
            className="electric-scooter-products-title"
          >
            {" "}
            {title}
          </h2>
        </Link>
      </div>

      
      <span className="electric-scooter-products-price">{price}</span>
      <span>TND</span>
    </div>
  );
}

export default ElectricScootersProducts;
