import { useContext } from "react";
import { AccountInfoContext } from "../../../context/AllContext";
import dummyAvatar from "../../../assets/stock/profile_placeholder.webp";
import "./PersonalInfo.css";
import { Link, NavLink } from "react-router-dom";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";

const PersonalInfo = () => {
  const [accountInfo, setAccountInfo] = useContext(AccountInfoContext);
  console.log(accountInfo);
  return (
    <section className="container m_top_bottom">
      <h2 className="mb-4">My Profile</h2>

      <div className="row">
        <div className="col-md-4 col-12 col-sm-4">
          {/* Navigation box */}
          <ProfileNavigation />
          {/* Navigation box */}
        </div>
        <div className="col-md-8 col-12 col-sm-8">my info</div>
      </div>
    </section>
  );
};

export default PersonalInfo;
