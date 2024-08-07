import "./resetPassword.css";
import reset_pass_img from "../../assets/stock/reset_password.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import client from "../../api_client/api_client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const ResetPasswordForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await client.post("/api/accounts/reset_password/", data);
      if (response.status === 200) {
        toast.success("Password reset successfully");
        navigate("/");
      } else {
        toast.warning("Password reset failed!");
      }
    } catch (error) {
      if (error.response.status == 404) {
        toast.error("OTP is not valid");
      } else {
        toast.error("Server error!! try again later");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-sm-12 col-md-6">
          <img src={reset_pass_img} alt="login" className="img-fluid" />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <h4 className="fw-bold">Enter OTP to change your password</h4>
          <p className="text-muted">
            Please enter OTP and other information to change your password
          </p>
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
              <label htmlFor="password" className="form-label">
                Password *
              </label>
              <input
                type="password"
                className="form-control custom-input"
                id="password"
                placeholder="Enter your new password"
                required
                {...register("password")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password *
              </label>
              <input
                type="password"
                className="form-control custom-input"
                id="confirm-password"
                placeholder="Confirm your password"
                required
                {...register("confirm_password")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                OTP *
              </label>
              <input
                type="number"
                className="form-control custom-input"
                id="otp"
                placeholder="Enter your OTP"
                required
                {...register("OTP")}
              />
            </div>
            {!loading && (
              <button className="base_button" type="submit">
                Reset password
              </button>
            )}
            {loading && (
              <button className="base_button" disabled>
                Please wait...
              </button>
            )}
          </form>
          <div className="mt-2">
            <Link to={"/login"}> Login in from here</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
