import React from "react";
import {
  CommentMetadata,
  CommentContent,
  CommentAvatar,
  CommentAuthor,
  Comment,
} from "semantic-ui-react";

function ProductReviews({ review, productId, hourDate, dayDate }) {
  return (
    <Comment key={review.id}>
      <CommentAvatar src={review.userId.imageUrl} />
      <CommentContent>
        <CommentAuthor as="a">{review.userId.userName}</CommentAuthor>
        <div>{review.yourReview}</div> {/* Assuming there's a 'body' field */}
        <CommentMetadata>
          <div>
            Today at {dayDate},{hourDate.substr(0, hourDate?.length - 8)}
          </div>
        </CommentMetadata>
      </CommentContent>
    </Comment>
  );
}

export default ProductReviews;
