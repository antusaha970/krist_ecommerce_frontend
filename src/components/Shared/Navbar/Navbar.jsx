import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/stock/logo.png";
import "./Navbar.css";
import { useContext } from "react";
import { IsLoggedInContext } from "../../../context/AllContext";
const Navbar = () => {
  const [isLoggedIn, setIsLoading] = useContext(IsLoggedInContext);

  const handleLogout = () => {
    localStorage.clear("access_token");
    setIsLoading(false);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link  text_18" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text_18" to="/products">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text_18" to="/">
                Our story
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text_18" to="/">
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text_18" to="">
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center g-4">
            <div className="me-3">
              <i className="fa-regular fa-heart me-4 icon_color nav_icon_size"></i>
              <i className="fa-solid fa-bag-shopping me-4 icon_color nav_icon_size"></i>
            </div>
            <div>
              {isLoggedIn && (
                <>
                  <Link
                    to={"/profile"}
                    className="base_button_2 me-2 text-decoration-none"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="base_button_2 me-2 text-decoration-none"
                  >
                    Logout
                  </button>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <Link
                    to={"/login"}
                    className="base_button_2 me-2 text-decoration-none"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="base_button_2 me-2 text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
