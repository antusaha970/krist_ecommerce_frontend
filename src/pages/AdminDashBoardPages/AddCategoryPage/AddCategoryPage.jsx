import { useForm } from "react-hook-form";
import AdminDashBoardMenu from "../../../components/AdminDashboardComponents/AdminDashBoardMenu/AdminDashBoardMenu";
import { useState } from "react";
import client from "../../../api_client/api_client";
import { toast } from "react-toastify";

const AddCategoryPage = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await client.post("/api/products/add_category/", data);
      if (response.status == 201) {
        toast.success("New category has been added");
      }
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container-fluid my-5">
      <div className="row g-2">
        <div className="col-md-2 col-sm-12 col-12 shadow-sm ps-4 text-center">
          <AdminDashBoardMenu />
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Category Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter product title"
                {...register("name")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Category Image URL *
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter product title"
                {...register("thumbnail")}
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

export default AddCategoryPage;
