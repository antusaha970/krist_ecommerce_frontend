import "./registerForm.css";
import registration_img from "../../assets/stock/register.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import client from "../../api_client/api_client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [error_first_name, setError_first_name] = useState("");
  const [error_last_name, setError_last_name] = useState("");
  const [error_phone_number, setError_phone_number] = useState("");
  const [error_address, setError_address] = useState("");
  const [error_email, setError_email] = useState("");
  const [error_password, setError_password] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError_address("");
    setError_phone_number("");
    setError_email("");
    setError_first_name("");
    setError_last_name("");
    setError_password("");

    const confirm_password = data["confirm-password"];
    if (data["password"] != confirm_password) {
      toast.error("Passwords did not match!!");
      return;
    }
    delete data["confirm-password"];
    try {
      setLoading(true);
      const response = await client.post("/api/accounts/register/", data);
      if (response.status === 201) {
        toast.success("Registration successfully");
        toast.info("Please login with your credentials");
        const user_data = response.data;
        localStorage.setItem(
          "access_token",
          JSON.stringify(user_data.access_token)
        );
        navigate("/login");
      } else {
        toast.warning("Registration failed!! please try again later");
      }
    } catch (error) {
      if (error.response.status == 400) {
        toast.error("Wrong information!! ");
        const error_data = error.response.data;
        if (error_data.email) {
          setError_email(error_data.email[0]);
        }
        if (error_data.last_name) {
          setError_last_name(error_data.last_name[0]);
        }
        if (error_data.first_name) {
          setError_first_name(error_data.first_name[0]);
        }
        if (error_data.phone_number) {
          setError_phone_number(error_data.phone_number[0]);
        }
        if (error_data.address) {
          setError_address(error_data.address[0]);
        }
        if (error_data.password) {
          setError_password(error_data.password[0]);
        }
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
          <img
            src={registration_img}
            alt="registration"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <h4 className="fw-bold">Create new account</h4>
          <p className="text-muted">Please enter details</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="first-name"
                placeholder="Enter your first name"
                required
                {...register("first_name")}
              />
              {error_first_name && (
                <p className="text-danger">{error_first_name}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="last-name"
                placeholder="Enter your last name"
                required
                {...register("last_name")}
              />
              {error_last_name && (
                <p className="text-danger">{error_last_name}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone-number" className="form-label">
                Phone number *
              </label>
              <input
                type="number"
                className="form-control custom-input"
                id="phone-number"
                placeholder="Enter your phone number"
                required
                {...register("phone_number")}
              />
              {error_phone_number && (
                <p className="text-danger">{error_phone_number}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="address"
                placeholder="Enter your address"
                required
                {...register("address")}
              />
              {error_address && <p className="text-danger">{error_address}</p>}
            </div>
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
              {error_email && <p className="text-danger">{error_email}</p>}
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
              {error_password && (
                <p className="text-danger">{error_password}</p>
              )}
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
                {...register("confirm-password")}
              />
            </div>
            {!loading && (
              <button className="base_button" type="submit">
                Register
              </button>
            )}
            {loading && (
              <button className="base_button" disabled>
                Please wait...
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
