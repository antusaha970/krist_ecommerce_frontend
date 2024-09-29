import { Link } from "react-router-dom";

export const ViewAllOrders = () => {
  return (
    <section className="container my-5">
      <h2>
        {" "}
        <Link to={"/dashboard"} className="text-decoration-none">
          Admin dashboard
        </Link>{" "}
        {">"}
        view all orders
      </h2>
    </section>
  );
};
