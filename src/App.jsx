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
  FinalItemsToOrderContext,
  IsLoggedInContext,
} from "./context/AllContext";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import MyWishListPage from "./pages/MyWishListPage/MyWishListPage";
import ManageAddressPage from "./pages/ManageAddressPage/ManageAddressPage";
import Modal from "react-modal";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import SelectShippingAddressPage from "./pages/SelectShippingAddressPage/SelectShippingAddressPage";
import SelectPaymentMethodPage from "./pages/SelectPaymentMethod/SelectPaymentMethodPage";
import MyOrdersPage from "./pages/MyOrdersPage/MyOrdersPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import SizeGuidePage from "./pages/SizeGuidePage/SizeGuidePage";
import AdminDashboardPage from "./pages/AdminDashboradPage/AdminDashboardPage";
import ViewAllOrdersPage from "./pages/ViewAllOrdersPage/ViewAllOrdersPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import AddCategoryPage from "./pages/AdminDashBoardPages/AddCategoryPage/AddCategoryPage";
import AddColorPage from "./pages/AdminDashBoardPages/AddColorPage/AddColorPage";
import AddSizePage from "./pages/AddSizePage/AddSizePage";
import ViewClientMessagePage from "./pages/AdminDashBoardPages/ViewClientMessagePage/ViewClientMessagePage";

function App() {
  Modal.setAppElement("#root");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [finalItemToOrder, setFinalItemToOrder] = useState([]);

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <AccountInfoContext.Provider value={[accountInfo, setAccountInfo]}>
        <CartItemContext.Provider value={[cartItems, setCartItems]}>
          <FinalItemsToOrderContext.Provider
            value={[finalItemToOrder, setFinalItemToOrder]}
          >
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
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/size-guide" element={<SizeGuidePage />} />

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
                path="/profile/my_orders"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <MyOrdersPage />
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
              <Route
                path="/order/shipping_address"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <SelectShippingAddressPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/order/payment_method"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <SelectPaymentMethodPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <AdminDashboardPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/view-orders"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <ViewAllOrdersPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/add-product"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <AddProductPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/add-category"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <AddCategoryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/add-color"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <AddColorPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/add-size"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <AddSizePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/view-client-messages"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <ViewClientMessagePage />
                  </PrivateRoute>
                }
              />
            </Routes>
            <Footer />
          </FinalItemsToOrderContext.Provider>
        </CartItemContext.Provider>
      </AccountInfoContext.Provider>
    </IsLoggedInContext.Provider>
  );
}

export default App;
