import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/stock/logo.png";
import "./Navbar.css";
import { useContext, useState } from "react";
import {
  AccountInfoContext,
  IsLoggedInContext,
} from "../../../context/AllContext";
import Cart from "../../Cart/Cart";
const Navbar = () => {
  const [isLoggedIn, setIsLoading] = useContext(IsLoggedInContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [accountInfo] = useContext(AccountInfoContext);
  const handleLogout = () => {
    sessionStorage.clear("access_token");
    setIsLoading(false);
  };

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container">
        {modalIsOpen && (
          <Cart modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        )}
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
              <NavLink className="nav-link text_18" to="/contact-us">
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text_18" to="size-guide">
                Size guide
              </NavLink>
            </li>
            {isLoggedIn && accountInfo?.is_superuser && (
              <li className="nav-item">
                <NavLink className="nav-link text_18" to="dashboard">
                  Admin Dashboard
                </NavLink>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center g-4">
            {isLoggedIn && (
              <div className="me-3">
                <Link
                  to={"/profile/wishlist"}
                  className="fa-regular fa-heart me-4 icon_color nav_icon_size fa-i-cursor text-decoration-none"
                ></Link>
                <i
                  className="icon_pointer fa-solid fa-bag-shopping me-4 icon_color nav_icon_size "
                  onClick={handleOpenCart}
                ></i>
              </div>
            )}
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
