import { useContext, useState } from "react";
import { AccountInfoContext } from "../../../context/AllContext";
import dummyAvatar from "../../../assets/stock/profile_placeholder.webp";
import "./PersonalInfo.css";
import { Link, NavLink } from "react-router-dom";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const [accountInfo, setAccountInfo] = useContext(AccountInfoContext);

  const [loading, setLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const phone_number = document.getElementById("phone_number").value;
    const address = document.getElementById("address").value;
    const data = { email, first_name, last_name, phone_number, address };
    console.log(data);
  };

  const handleEditProfile = () => {
    setFormDisabled(false);
  };

  return (
    <section className="container m_top_bottom">
      <h2 className="mb-4">My Profile</h2>

      <div className="row">
        <div className="col-md-4 col-12 col-sm-4">
          {/* Navigation box */}
          <ProfileNavigation />
          {/* Navigation box */}
        </div>
        <div className="col-md-8 col-12 col-sm-8">
          <h5 className="mb-3">My information</h5>
          <div className="d-flex justify-content-between align-items-center">
            <div className="profile_avatar">
              <img src={dummyAvatar} alt="avatar" className="img-fluid" />
            </div>
            <div>
              <button className="base_button_2" onClick={handleEditProfile}>
                <i className="fa-solid fa-user-pen"></i> Edit profile
              </button>
            </div>
          </div>

          {/* profile information form */}
          <form onSubmit={handleSubmit}>
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
                defaultValue={accountInfo.email}
                disabled={formDisabled}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="first_name"
                placeholder="Enter your first name"
                required
                defaultValue={accountInfo.first_name}
                disabled={formDisabled}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="last_name"
                placeholder="Enter your last name"
                required
                defaultValue={accountInfo.last_name}
                disabled={formDisabled}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">
                Phone number *
              </label>
              <input
                type="number"
                className="form-control custom-input"
                id="phone_number"
                placeholder="Enter your last name"
                required
                defaultValue={accountInfo.phone_number}
                disabled={formDisabled}
              />
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
                defaultValue={accountInfo.address}
                disabled={formDisabled}
              />
            </div>
            {!formDisabled && (
              <button className="base_button" type="submit">
                Update
              </button>
            )}
          </form>
          {/* profile information form */}
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
