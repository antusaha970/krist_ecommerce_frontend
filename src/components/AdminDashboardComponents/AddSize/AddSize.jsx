import { useForm } from "react-hook-form";
import AdminDashBoardMenu from "../../../components/AdminDashboardComponents/AdminDashBoardMenu/AdminDashBoardMenu";
import { useState } from "react";
import client from "../../../api_client/api_client";
import { toast } from "react-toastify";

const AddSize = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await client.post("/api/products/add_size/", data);
      if (response.status == 201) {
        toast.success("New Size has been added");
        reset();
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
                Size *
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter product title"
                {...register("name")}
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

export default AddSize;
