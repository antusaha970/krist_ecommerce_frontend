import review_avatar from "../../assets/stock/avatar_for_review_card.png";
import "./SingleReviewCard.css";
const SingleReviewCard = ({ review }) => {
  return (
    <div className="my-4 border-bottom">
      <div className=" d-flex align-items-center ">
        <div className="review_avatar">
          <img src={review_avatar} alt="avatar" />
        </div>
        <div>
          <p className="text_18 mb-0">{review.reviews.name}</p>
        </div>
      </div>
      <h5>Email: {review.reviews.email}</h5>
      <p>{review.reviews.body}</p>
    </div>
  );
};

export default SingleReviewCard;
