import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import client from "../../../api_client/api_client";
import { toast } from "react-toastify";
import { useContext } from "react";
import { IsLoggedInContext } from "../../../context/AllContext";
const ProductCard = ({ product }) => {
  const [isLoggedIn] = useContext(IsLoggedInContext);
  const navigate = useNavigate();
  const handleAddToWishList = async () => {
    if (isLoggedIn) {
      try {
        const data = { products: product.id };
        const response = await client.post("/api/wishlist/", data);

        if (response.status == 201) {
          toast.success("Added to your wish list");
        }
        if (response?.data?.statusCode == 304) {
          toast.warn("Already added to wish list");
        }
      } catch (error) {
        console.error({ error });
        if (error.response.status == 304) {
          toast.warning("Already added to wish list");
        }
      }
    } else {
      navigate("/login");
    }
  };
  const handleAddToCart = async () => {
    if (isLoggedIn) {
      try {
        const data = { product: product?.id };
        const response = await client.post("/api/cart/", data);
        if (response.status == 201) {
          toast.success("Added product to cart");
        }
        if (response?.data?.statusCode == 304) {
          toast.warn("Already added to cart");
        }
      } catch (error) {
        console.error({ error });
        if (error.response.status == 304) {
          toast.warning("Already added to cart");
        }
      }
    } else {
      toast.info("Please login first");
      navigate("/login");
    }
  };
  return (
    <div className="col-md-3 col-sm-6 col-12">
      <div className="product-grid">
        <div className="product-image">
          <a href="#" className="image">
            <img
              className="pic-1"
              src={
                product.product_images.length > 0
                  ? product.product_images[0].images
                  : ""
              }
            />
            <img
              className="pic-2"
              src={
                product.product_images.length > 1
                  ? product.product_images[1].images
                  : ""
              }
            />
          </a>
          <span className="product-sale-label">hot</span>
        </div>
        <div className="product-content">
          <ul className="rating">
            <li className="fas fa-star" />
            <li className="fas fa-star" />
            <li className="fas fa-star" />
            <li className="fas fa-star" />
            <li className="fas fa-star disable" />
          </ul>
          <h3 className="title">
            <Link to={`/products/${product.id}`}> {product.title} </Link>
          </h3>
          <div className="price">${product.price} </div>
          <div className="product-button-group">
            <p
              className="product-like-icon wish_list_icon"
              onClick={handleAddToWishList}
            >
              <i className="fas fa-heart" />
            </p>
            <div className="add-to-cart" onClick={handleAddToCart}>
              <i className="fa fa-shopping-bag" />
              ADD TO CART
            </div>
            <a className="product-compare-icon" href="#">
              <i className="fas fa-random" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
