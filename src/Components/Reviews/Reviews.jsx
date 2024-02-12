import ButtonCard from "../Btn/ButtonCard";
import "./Style.css";
import React, { useState, useEffect } from "react";
import { FormCheckbox } from "semantic-ui-react";
import axios from "axios";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
import { CommentGroup, Header } from "semantic-ui-react";
import ProductReviews from "./ProductReviews";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Reviews({ productId }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  let token = localStorage.getItem("token");
  const [reviewsBody, setReviewsBody] = useState("");
  // const [reviewId, setReviewId] = useState();
  // const [newReviewBody, setNewReviewtBody] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/getReviews/${productId}`)
      .then((res) => {
        // setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        // setLoading(false);
        if (err.response.status === 404) {
          setError("404 NOT FOUND");
          console.dir(err);
        }
      });
  }, [data, productId]);
  const handleUserAddReview = () => {
    setLoading(true);
    if (token) {
      axios
        .post(`${url}/addReview/${productId}`, reviewsBody, {
          headers: { token },
        })
        .then((res) => {
          setLoading(false);
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          console.dir(err);
        });
    } else {
      navigate("/login");
    }
  };
  // const handleUserUpdateReview = (reviewId) => {
  //   // setShowEdit(false);
  //   axios
  //     .put(`${url}/updateReview/${reviewId}`, newReviewBody, {
  //       headers: { token },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.dir(err);
  //     });
  // };
  // const handleUserDeleteReview = (reviewId) => {
  //   // setLoading(true);
  //   axios
  //     .delete(
  //       `https://contactapp-api-uas9.onrender.com/api/user/deleteReview/${reviewId}`,
  //       { headers: { token } }
  //     )
  //     .then((res) => {
  //       // setLoading(false);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       // setLoading(false);
  //       console.dir(err);
  //     });
  // };
  return (
    <div>
      <div className="cadre">
        <h2>Reviews ({data?.length})</h2>
        <div>
          {/* <details style={{ cursor: "pointer" }}>
            <summary> Reviews</summary> */}
          <CommentGroup>
            <Header as="h3" dividing>
              Reviews
            </Header>
            {data?.length > 0 &&
              data.map((review) => {
                let tIndex = review.createdAt.indexOf("T");
                let dayDate = review.createdAt.substr(0, tIndex);
                let hourDate = review.createdAt.substr(
                  tIndex + 1,
                  review?.createdAt.length
                );
                return (
                  <ProductReviews
                    dayDate={dayDate}
                    hourDate={hourDate}
                    review={review}
                    productId={productId}
                  />
                );
              })}
          </CommentGroup>
          {/* </details> */}
        </div>
        <form className="review-form">
          
          <textarea
            id="review"
            name="review"
            rows="4"
            required
            onChange={(e) => setReviewsBody({ yourReview: e.target.value })}
          />

          {/* <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setNewReviewtBody(e.target.value)}
          />

          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setNewReviewtBody(e.target.value)}
          /> */}
          {/* <FormCheckbox label="Save my name, email, and website in this browser for the next time I comment." />
          <p> </p> */}
          {loading ? (
            <Spinner />
          ) : (
            <ButtonCard text={"Add Review"} fn={handleUserAddReview} />
          )}
        </form>
      </div>
    </div>
  );
}

export default Reviews;
