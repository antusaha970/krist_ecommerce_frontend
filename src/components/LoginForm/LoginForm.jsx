import "./loginForm.css";
import login_img from "../../assets/stock/login.png";
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
      const response = await client.post("/api/accounts/login/", data);
      if (response.status === 200) {
        toast.success("Logged in successful");
        const user_data = response.data;
        localStorage.setItem(
          "access_token",
          JSON.stringify(user_data.access_token)
        );
      } else {
        toast.warning("Login failed!! please try again later");
      }
    } catch (error) {
      if (error.response.status == 404) {
        toast.error("Invalid credential!! ");
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
          <img src={login_img} alt="login" className="img-fluid" />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <h4 className="fw-bold">Welcome 👋</h4>
          <p className="text-muted">Please login here</p>
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
                placeholder="Enter your password"
                required
                {...register("password")}
              />
            </div>
            {!loading && (
              <button className="base_button" type="submit">
                Login
              </button>
            )}
            {loading && (
              <button className="base_button" disabled>
                Please wait...
              </button>
            )}
          </form>
          <div className="mt-2">
            <Link> Forget password?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
