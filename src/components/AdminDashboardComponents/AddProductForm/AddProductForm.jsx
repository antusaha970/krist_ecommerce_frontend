import { useEffect, useState } from "react";
import client from "../../../api_client/api_client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AdminDashBoardMenu from "../AdminDashBoardMenu/AdminDashBoardMenu";

const AddProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllDependencies = async () => {
      try {
        const category_response = await client.get(
          "/api/products/all_categories/"
        );
        const size_response = await client.get("/api/products/all_sizes/");
        const color_response = await client.get("/api/products/all_colors/");
        setCategories(category_response.data);
        setColors(color_response.data);
        setSizes(size_response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    getAllDependencies();
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const image1Link = data.image1;
      const image2Link = data.image2;
      let product_id = null;
      delete data.image1;
      delete data.image2;
      data.rating = 0;

      const response = await client.post("/api/products/", data);
      if (response.status == 201) {
        toast.success("Product has been added successfully now adding images");
        product_id = response?.data?.id;
      }
      const response2 = await client.post(
        `/api/products/${product_id}/upload_product_image/`,
        { images: [image1Link, image2Link] }
      );
      if (response2.status == 201) {
        toast.success("Images added successfully");
      }
    } catch (error) {
      console.error({ error });
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container-fluid my-5">
      <div className="row g-3">
        <div className="col-md-2 col-sm-12 col-12 shadow-sm ps-4 text-center">
          <AdminDashBoardMenu />
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title *
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter product title"
                {...register("title")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating *
              </label>
              <input
                type="number"
                className="form-control"
                id="rating"
                placeholder="Enter product rating"
                {...register("rating")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock *
              </label>
              <input
                type="number"
                className="form-control"
                id="stock"
                placeholder="Enter product stock"
                {...register("stock")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Price *
              </label>
              <input
                type="number"
                className="form-control"
                id="stock"
                placeholder="Enter product stock"
                {...register("price")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description *
              </label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Enter product description"
                {...register("description")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="add_description" className="form-label">
                Additional Description *
              </label>
              <textarea
                className="form-control"
                id="add_description"
                placeholder="Enter product additional description"
                {...register("additional_info")}
                required
              />
            </div>
            <div className="mb-3">
              <label>Select Product categories *</label>
              <br />
              {categories?.map((cat) => (
                <>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value={cat.name}
                    key={cat.name}
                    {...register("categories")}
                  />
                  <label className="form-label">{cat.name}</label>
                  <br />
                </>
              ))}
            </div>
            <div className="mb-3">
              <label>Select Product colors *</label>
              <br />
              {colors?.map((cat) => (
                <>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value={cat.name}
                    key={cat.name}
                    {...register("colors")}
                  />
                  <label className="form-label">{cat.name}</label>
                  <br />
                </>
              ))}
            </div>
            <div className="mb-3">
              <label>Select Product sizes *</label>
              <br />
              {sizes?.map((cat) => (
                <>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value={cat.name}
                    key={cat.name}
                    {...register("sizes")}
                  />
                  <label className="form-label">{cat.name}</label>
                  <br />
                </>
              ))}
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Product image URL 1 (Hosted on live server) *
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter image URL"
                {...register("image1")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Product image URL 2 (Hosted on live server) *
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter image URL"
                {...register("image2")}
                required
              />
            </div>
            {!isLoading && (
              <button className="base_button" type="submit">
                Submit
              </button>
            )}
            {isLoading && (
              <button className="base_button" disabled>
                Please wait...
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductForm;
