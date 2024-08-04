import "./forgetPassword.css";
import forget_pass_img from "../../assets/stock/forget_password.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import client from "../../api_client/api_client";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await client.post(
        "/api/accounts/forgot_password/",
        data
      );
      if (response.status === 200) {
        toast.success("OTP sent successfully");
      } else {
        toast.warning("please try again later");
      }
    } catch (error) {
      if (error.response.status == 404) {
        toast.error("No account found");
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
          <img src={forget_pass_img} alt="login" className="img-fluid" />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <h4 className="fw-bold">Forget password</h4>
          <p className="text-muted">
            Enter registered email here. We will send a code to reset your
            password
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
            {!loading && (
              <button className="base_button" type="submit">
                Send
              </button>
            )}
            {loading && (
              <button className="base_button" disabled>
                Please wait...
              </button>
            )}
          </form>
          <div className="mt-2">
            <Link to={"/login"}> Login from here</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
