import { Link, NavLink } from "react-router-dom";
import { AccountInfoContext } from "../../../context/AllContext";
import { useContext } from "react";
import dummyAvatar from "../../../assets/stock/profile_placeholder.webp";

const ProfileNavigation = () => {
  const [accountInfo, setAccountInfo] = useContext(AccountInfoContext);
  return (
    <div className="border py-2">
      <div className="d-flex p-2">
        <div className="profile_avatar">
          <img src={dummyAvatar} alt="avatar" className="img-fluid" />
        </div>
        <div className="ms-4">
          <p className="mb-0">Hello 👋</p>
          <h5>
            {accountInfo.first_name} {accountInfo.last_name}
          </h5>
        </div>
      </div>
      <div className="profile_navigation">
        <NavLink to={"/profile"}>
          <i className="fa-solid fa-user me-3"></i> Personal Information
        </NavLink>
      </div>
      <div className="profile_navigation">
        <Link>
          <i className="fa-solid fa-box me-3"></i> My Orders
        </Link>
      </div>
      <div className="profile_navigation">
        <Link>
          <i className="fa-solid fa-heart me-3"></i> My Wishlist
        </Link>
      </div>
      <div className="profile_navigation ">
        <Link>
          <i className="fa-solid fa-location-dot me-3"></i> Manage Address
        </Link>
      </div>
    </div>
  );
};

export default ProfileNavigation;
