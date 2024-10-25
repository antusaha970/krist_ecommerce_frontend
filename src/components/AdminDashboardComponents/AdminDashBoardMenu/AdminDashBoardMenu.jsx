import { Link } from "react-router-dom";
import "./AdminDashBoard.css";

const AdminDashBoardMenu = () => {
  return (
    <>
      <h2>
        <Link to={"/dashboard"} className="text-decoration-none dashboard_link">
          <i className="fa-solid fa-bars"></i> Dashboard
        </Link>
      </h2>
      <div className="my-4">
        <Link
          className="text-decoration-none dashboard_link"
          to={"/admin/view-orders"}
        >
          <i className="fa-solid fa-cart-shopping"></i> View all orders
        </Link>
      </div>
      <div className="my-4">
        <Link
          className="text-decoration-none dashboard_link"
          to={"/admin/add-category"}
        >
          <i className="fa-solid fa-list"></i> Add new Category
        </Link>
      </div>
      <div className="my-4">
        <Link
          className="text-decoration-none dashboard_link"
          to={"/admin/add-product"}
        >
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i> Add
          new Size
        </Link>
      </div>
      <div className="my-4">
        <Link
          className="text-decoration-none dashboard_link"
          to={"/admin/add-color"}
        >
          <i className="fa-solid fa-droplet"></i> Add new Color
        </Link>
      </div>
      <div className="my-4">
        <Link
          className="text-decoration-none dashboard_link"
          to={"/admin/add-product"}
        >
          <i className="fa-solid fa-plus"></i> Add new product
        </Link>
      </div>
    </>
  );
};

export default AdminDashBoardMenu;
