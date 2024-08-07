import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../api_client/api_client";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProduct = async (id) => {
      try {
        setIsLoading(true);
        const response = await client.get(`/api/products/${id}/`);
        setProduct(response.data);
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getProduct(id);
  }, [id]);
  console.log(product);

  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6 col-sm-12 col-12">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-3">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-4">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-5">
                  <img src="http://placekitten.com/400/252" />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-3" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-4" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-5" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="details col-md-6 col-sm-12 col-12">
              <h3 className="product-title"> {product?.title} </h3>
              <div className="rating">
                <span className="review-no">
                  Rating: {product?.rating}{" "}
                  <span className="fa fa-star checked" />
                </span>
              </div>
              <p className="product-description">{product?.description}</p>
              <h4 className="price">
                current price: <span>${product?.price}</span>
              </h4>
              <p className="vote">
                Category: {product?.categories?.join(", ")}
              </p>
              <h5 className="sizes">
                sizes:
                {product?.sizes?.map((size) => (
                  <span
                    key={size}
                    className="size"
                    data-toggle="tooltip"
                    title={size}
                  >
                    {size}
                  </span>
                ))}
              </h5>
              <h5 className="colors">
                colors:
                {product?.colors?.map((color) => (
                  <span
                    key={color}
                    className="size"
                    data-toggle="tooltip"
                    title={color}
                  >
                    {color}
                  </span>
                ))}
              </h5>
              <h5 className="sizes">In stock : {product?.stock} </h5>
              <div className="action">
                <button className="base_button_2 me-2" type="button">
                  Add to cart <i className="fa-solid fa-cart-shopping"></i>
                </button>

                <button className="base_button" type="button">
                  <span className="fa fa-heart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
