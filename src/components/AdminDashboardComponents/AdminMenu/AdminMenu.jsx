import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <section className="container my-5">
      <h2>
        <Link to={"/dashboard"} className="text-decoration-none">
          Admin dashboard
        </Link>
      </h2>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Link
          className="base_button_2 text-decoration-none"
          to={"/admin/view-orders"}
        >
          View all orders
        </Link>
        <Link
          className="base_button_2 text-decoration-none"
          to={"/admin/add-product"}
        >
          Add new product
        </Link>
      </div>
    </section>
  );
};

export default AdminMenu;
