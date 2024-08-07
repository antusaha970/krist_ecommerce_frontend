import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../api_client/api_client";
import "./ProductDetails.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
};

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

  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            {/* product images box */}
            <div className="preview col-md-6 col-sm-12 col-12">
              <div className="slider-container">
                <Slider {...settings}>
                  {product?.product_images?.map((pd_img, idx) => (
                    <div key={idx}>
                      <img src={pd_img.images} alt="" className="img-fluid" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            {/* product images box */}
            {/* product details box */}
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
            {/* product details box */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
