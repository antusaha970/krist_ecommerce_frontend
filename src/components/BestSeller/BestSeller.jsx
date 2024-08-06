import { useEffect, useState } from "react";
import "./bestSeller.css";
import client from "../../api_client/api_client";
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getBestSeller = async () => {
      try {
        const response = await client.get("/api/products/?page_size=8");
        setProducts(response.data.results);
      } catch (error) {
        console.error({ error });
      }
    };
    getBestSeller();
  }, []);

  console.log(products);

  return (
    <section className="container m_top_bottom">
      <h2 className="text-center fw-bold">Our Bestseller</h2>
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <div className="col-md-3 col-sm-6 col-12" key={product.id}>
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
                    <a href="#"> {product.title} </a>
                  </h3>
                  <div className="price">${product.price} </div>
                  <div className="product-button-group">
                    <a className="product-like-icon" href="#">
                      <i className="fas fa-heart" />
                    </a>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
