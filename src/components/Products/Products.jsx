import { useEffect, useState } from "react";
import client from "../../api_client/api_client";
import ProductCard from "../Shared/ProductCard/ProductCard";
import "./Products.css";
import Loader from "../Shared/Loader/Loader";

const Products = () => {
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedColors, setSelectedColors] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await client.get("/api/products/all_categories/");
        setCategories(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    const getAllSizes = async () => {
      try {
        const response = await client.get("/api/products/all_sizes/");
        setSizes(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    const getAllColors = async () => {
      try {
        const response = await client.get("/api/products/all_colors/");
        setColors(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    getAllCategories();
    getAllSizes();
    getAllColors();
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsLoading(true);
        const response = await client.get(
          `/api/products/?categories=${selectedCategories}&colors=${selectedColors}&sizes=${selectedSize}&page=${selectedPage}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, [selectedCategories, selectedColors, selectedSize, selectedPage]);

  const handleChangeCategoryForFilter = (category) => {
    setSelectedCategories(category);
  };
  const handleChangeColorForFilter = (color) => {
    setSelectedColors(color);
  };
  const handleChangeSizeForFilter = (size) => {
    setSelectedSize(size);
  };

  const handlePreviousPage = () => {
    if (products.previous) {
      setSelectedPage((curPage) => curPage - 1);
    }
  };
  const handleNextPage = () => {
    if (products.next) {
      setSelectedPage((curPage) => curPage + 1);
    }
  };

  return (
    <section className="container m_top_bottom">
      <p>Shop &gt; All Products</p>

      <div className="row">
        <div className="col-12 col-sm-4 col-md-2">
          {/* all filters */}
          <div className="accordion" id="filter_accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#categories"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Product Category
                </button>
              </h2>
              <div id="categories" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category_filter"
                        id="all_category"
                        defaultChecked="true"
                        onClick={() => handleChangeCategoryForFilter("")}
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
                          onClick={() =>
                            handleChangeCategoryForFilter(category.name)
                          }
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
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sizes"
                  aria-expanded="true"
                >
                  Product Sizes
                </button>
              </h2>
              <div id="sizes" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size_filter"
                        id="all_sizes"
                        defaultChecked="true"
                        onClick={() => handleChangeSizeForFilter("")}
                      />
                      <label className="form-check-label" htmlFor="all_sizes">
                        All Sizes
                      </label>
                    </div>
                    {sizes?.map((size) => (
                      <div className="form-check mb-2" key={size.name}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size_filter"
                          id={`${size.name}`}
                          onClick={() => handleChangeSizeForFilter(size.name)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`${size.name}`}
                        >
                          {size.name}
                        </label>
                      </div>
                    ))}
                  </>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#colors"
                  aria-expanded="true"
                >
                  Product Colors
                </button>
              </h2>
              <div id="colors" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color_filter"
                        id="all_colors"
                        defaultChecked="true"
                        onClick={() => handleChangeColorForFilter("")}
                      />
                      <label className="form-check-label" htmlFor="all_colors">
                        All colors
                      </label>
                    </div>
                    {colors?.map((color) => (
                      <div className="form-check mb-2" key={color.name}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="color_filter"
                          id={`${color.name}`}
                          onClick={() => handleChangeColorForFilter(color.name)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`${color.name}`}
                        >
                          {color.name}
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
        {isLoading && (
          <div className="col-12 col-sm-8 col-md-10">
            <Loader />
          </div>
        )}
        {!isLoading && (
          <div className="col-12 col-sm-8 col-md-10">
            <div className="d-flex justify-content-between my-2 align-items-center">
              <div>
                <i className="fa-solid fa-border-none"></i> Showing{" "}
                {products?.results?.length} of {products.count} results{" "}
                <i className="fa-solid fa-arrow-down"></i>
              </div>
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

            {/* pagination navigation */}
            <div className="d-flex justify-content-end">
              <ul className="pagination">
                <li className="page-item">
                  <button
                    onClick={handlePreviousPage}
                    className="base_button rounded-0 me-1"
                  >
                    Previous
                  </button>
                </li>

                <li className="page-item">
                  <button
                    onClick={handleNextPage}
                    className="base_button rounded-0"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
            {/* pagination navigation */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
