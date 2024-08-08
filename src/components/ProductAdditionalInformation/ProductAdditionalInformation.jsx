import { useEffect, useState } from "react";
import client from "../../api_client/api_client";
import SingleReviewCard from "../SingleReviewCard/SingleReviewCard";
import AddReviewForm from "../AddReviewForm/AddReviewForm";

const ProductAdditionalInformation = ({ product }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProductReviews = async () => {
      try {
        const response = await client.get(
          `/api/products/${product.id}/product_review/`
        );
        setReviews(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    if (product && product.id) {
      getProductReviews();
    }
  }, [product]);

  return (
    <div className="m_top_bottom">
      <div>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-description-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-description"
            type="button"
            role="tab"
            aria-controls="nav-description"
            aria-selected="true"
          >
            Description
          </button>
          <button
            className="nav-link"
            id="nav-info-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-info"
            type="button"
            role="tab"
            aria-controls="nav-info"
            aria-selected="false"
          >
            Additional information
          </button>
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Reviews
          </button>
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-description"
          role="tabpanel"
          aria-labelledby="nav-description-tab"
        >
          <p className="text_18">{product?.description}</p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-info"
          role="tabpanel"
          aria-labelledby="nav-info-tab"
        >
          <p className="text_18">{product?.additional_info}</p>
        </div>
        {/* customer reviews */}
        <div
          className="tab-pane fade my-2"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div>
            <h4 className="fw-bold">
              Customer reviews <i className="fa-solid fa-star"></i>
            </h4>
          </div>

          <div>
            {reviews?.map((review) => (
              <SingleReviewCard key={review.id} review={review} />
            ))}
          </div>

          {product && product.id && <AddReviewForm productId={product.id} />}
        </div>
        {/* customer reviews */}
      </div>
    </div>
  );
};

export default ProductAdditionalInformation;
