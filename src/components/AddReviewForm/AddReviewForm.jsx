import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import client from "../../api_client/api_client";
import { toast } from "react-toastify";
import { IsLoggedInContext } from "../../context/AllContext";
import { useNavigate } from "react-router-dom";

const AddReviewForm = ({ productId }) => {
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);
  const [isLoggedIn] = useContext(IsLoggedInContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (isLoggedIn) {
      try {
        setLoading(true);
        const response = await client.post(
          `/api/products/${productId}/product_review/`,
          data
        );
        if (response.status == 201) {
          toast.success("Review posted successfully");
        }
      } catch (error) {
        console.error({ error });
        console.log(error.response.status);
        if (error.response.status == 401) {
          toast.error("You haven't ordered this product!");
        } else {
          toast.error("There was an error! please try again later.");
        }
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please login first!");
      navigate("/login");
    }
  };

  return (
    <div>
      <h5 className="fw-bold">Add your review</h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            className="form-control custom-input"
            id="email"
            placeholder="Enter your email address"
            required
            {...register("email")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name *
          </label>
          <input
            type="text"
            className="form-control custom-input"
            id="name"
            placeholder="Enter your name"
            required
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Review *
          </label>
          <textarea
            rows={5}
            type="text"
            className="form-control custom-input"
            id="body"
            placeholder="Write your review"
            required
            {...register("body")}
          />
        </div>
        {!loading && (
          <button className="base_button" type="submit">
            Submit
          </button>
        )}
        {loading && (
          <button className="base_button" disabled>
            Please wait...
          </button>
        )}
      </form>
    </div>
  );
};

export default AddReviewForm;
