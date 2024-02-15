import React, { useState } from "react";
import {
  CommentMetadata,
  CommentContent,
  CommentAvatar,
  CommentAuthor,
  Comment,
  CommentAction,
  CommentActions,
  CommentText,
  Form,
  Button,
  Icon,
} from "semantic-ui-react";

import axios from "axios";
import { adminUrl, url } from "../../utils/url";
import { Spinner } from "react-bootstrap";

function ProductReviews({ review, hourDate, dayDate }) {
  let token = localStorage.getItem("token");
  let userId = localStorage.getItem("id");
  let isUser = localStorage.getItem("isUser");
  let isAdmin = localStorage.getItem("isAdmin");

  // const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [newReviewBody, setNewReviewtBody] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  // const [Cancel, setCancel] = useState(false);
  const [editErr, setEditErr] = useState("");
  const [showDelete, setShowDelete] = useState("");
  const handleUserUpdateReview = () => {
    setLoading2(true);
    if (newReviewBody.yourReview) {
      axios
        .put(`${url}/updateReview/${review._id}`, newReviewBody, {
          headers: { token },
        })
        .then((res) => {
          setShowEdit(false);
          setLoading2(false);
          console.log(res);
        })
        .catch((err) => {
          setShowEdit(false);
          setLoading2(false);
          console.dir(err);
        });
    } else {
      setLoading2(false);
      setEditErr("Empty comment is not allowed");
    }
  };
  const handleUserDeleteReview = () => {
    // console.log(review._id);
    setLoading(true);
    axios
      .delete(`${url}/deleteReview/${review._id}`, { headers: { token } })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const handleAdminDeleteReview = () => {
    setLoading(true);
    axios
      .delete(`${adminUrl}/deleteReview/${review._id}`, { headers: { token } })
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
      });
  };
  // console.log(review._id);

  return (
    <Comment key={review._id}>
      <CommentAvatar src={review.userId.imageUrl} />
      <CommentContent>
        <CommentAuthor as="a">{review.userId.userName}</CommentAuthor>
        {showEdit ? (
          <Form>
            <Form.TextArea
              onChange={(e) => {
                setNewReviewtBody({ yourReview: e.target.value });
              }}
              type="text"
              width={10}
              error={editErr ? editErr : null}
            />
            <Button
              onClick={() => {
                handleUserUpdateReview();
              }}
              loading={loading2}
              size="mini"
            >
              Save
            </Button>
            <Button
              onClick={() => {
                setShowEdit(false);
              }}
              size="mini"
            >
              Cancel
            </Button>
          </Form>
        ) : (
          <CommentText>{review.yourReview}</CommentText>
        )}
        {/* Assuming there's a 'body' field */}
        <CommentMetadata>
          <div>
            Today at {dayDate},{hourDate.substr(0, hourDate?.length - 8)}
          </div>
        </CommentMetadata>
      </CommentContent>
      {!showEdit && review.userId._id === userId && (
        <CommentActions>
          {loading ? (
            <Spinner size="lg" />
          ) : (
            <CommentAction
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleUserDeleteReview();
              }}
            >
              Delete
            </CommentAction>
          )}
          <CommentAction
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowEdit(true);
            }}
          >
            Edit
          </CommentAction>
        </CommentActions>
      )}

      {isAdmin === "true" && (
        <CommentActions>
          {loading ? (
            <Icon name="circle notched" loading />
          ) : (
            <CommentAction
              onClick={() => {
                handleAdminDeleteReview();
              }}
            >
              Delete
            </CommentAction>
          )}
        </CommentActions>
      )}
    </Comment>
  );
}

export default ProductReviews;
