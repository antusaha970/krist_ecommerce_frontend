import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Shared/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Shared/Footer/Footer";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import AllProductPage from "./pages/AllProductPage/AllProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import { useState } from "react";
import {
  AccountInfoContext,
  CartItemContext,
  IsLoggedInContext,
} from "./context/AllContext";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import MyWishListPage from "./pages/MyWishListPage/MyWishListPage";
import ManageAddressPage from "./pages/ManageAddressPage/ManageAddressPage";
import Modal from "react-modal";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
function App() {
  Modal.setAppElement("#root");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});
  const [cartItems, setCartItems] = useState([]);

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <AccountInfoContext.Provider value={[accountInfo, setAccountInfo]}>
        <CartItemContext.Provider value={[cartItems, setCartItems]}>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/products" element={<AllProductPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <MyProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/wishlist"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <MyWishListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/manage_address"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ManageAddressPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/order/checkout"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <CheckOutPage />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </CartItemContext.Provider>
      </AccountInfoContext.Provider>
    </IsLoggedInContext.Provider>
  );
}

export default App;
