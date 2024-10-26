import { Link } from "react-router-dom";
import "./LatestProductCard.css";
const LatestProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="col-md-4 col-sm-12 col-12">
      <div className="product_admin card  shadow-sm">
        <img
          src={`${product?.product_images[0]?.images}`}
          className="product_admin card-img-top"
          alt="Product image"
        />{" "}
        <div className="product_admin card-body">
          {" "}
          <div className="product_admin clearfix mb-3">
            {" "}
            <span className="product_admin float-start badge rounded-pill bg-primary">
              {new Date(product?.created_on).getFullYear()}
            </span>{" "}
            <span className="product_admin float-end price-hp">
              {" "}
              ${product?.price}{" "}
            </span>{" "}
          </div>{" "}
          <h5 className="product_admin card-title">{product?.title}</h5>
          <div className="text-center my-4">
            <Link to={`/products/${product.id}`} className="btn btn-warning">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
