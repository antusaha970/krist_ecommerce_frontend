import { useEffect, useState } from "react";
import client from "../../api_client/api_client";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await client.get(`/api/products/`);
        setProducts(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    const getAllCategories = async () => {
      try {
        const response = await client.get("/api/products/all_categories/");
        setCategories(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    getAllProducts();
    getAllCategories();
  }, []);

  console.log(categories);

  return (
    <section className="container m_top_bottom">
      <p>Shop &gt; All Products</p>

      <div className="row">
        <div className="col-12 col-sm-4 col-md-2">
          {/* all filters */}
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Category
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category_filter"
                        id="all_category"
                        defaultChecked="true"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="all_category"
                      >
                        All category
                      </label>
                    </div>
                    {categories?.map((category) => (
                      <div className="form-check mb-2" key={category.name}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="category_filter"
                          id={`${category.name}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`${category.name}`}
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </div>

          {/* all filters */}
        </div>
        <div className="col-12 col-sm-8 col-md-10">
          <div className="d-flex justify-content-between my-2 align-items-center">
            <div>Showing 10 of {products.count} results</div>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Sort by</option>
                <option value={1}>Latest</option>
                <option value={2}>Oldest</option>
              </select>
            </div>
          </div>
          <div className="row">
            {products?.results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
