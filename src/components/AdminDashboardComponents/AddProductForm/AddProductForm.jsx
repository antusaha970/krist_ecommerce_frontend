import { Link } from "react-router-dom";

const AddProductForm = () => {
  return (
    <section className="container my-5">
      <h2>
        {" "}
        <Link to={"/dashboard"} className="text-decoration-none">
          Admin dashboard
        </Link>{" "}
        {">"}
        Add product
      </h2>
    </section>
  );
};

export default AddProductForm;
