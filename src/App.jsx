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
import { IsLoggedInContext } from "./context/AllContext";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
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
      </Routes>
      <Footer />
    </IsLoggedInContext.Provider>
  );
}

export default App;
