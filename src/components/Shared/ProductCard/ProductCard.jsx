import { Link } from "react-router-dom";
import "./ProductCard.css";
import client from "../../../api_client/api_client";
import { toast } from "react-toastify";
const ProductCard = ({ product }) => {
  const handleAddToWishList = async () => {
    try {
      const data = { products: product.id };
      const response = await client.post("/api/wishlist/", data);
      if (response.status == 201) {
        toast.success("Added to your wish list");
      }
    } catch (error) {
      console.error({ error });
      if (error.response.status == 304) {
        toast.warning("Already added to wish list");
      }
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
            <div className="add-to-cart" href="#">
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
