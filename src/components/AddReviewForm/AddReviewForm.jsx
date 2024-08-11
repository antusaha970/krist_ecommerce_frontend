import { useState } from "react";
import { useForm } from "react-hook-form";

const AddReviewForm = ({ productId }) => {
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
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
