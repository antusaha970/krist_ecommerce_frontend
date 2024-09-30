import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../api_client/api_client";

export const ViewAllOrders = () => {
  const [placedOrders, setPlacedOrders] = useState([]);

  useEffect(() => {
    const getAllPlacedOrders = async () => {
      try {
        const response = await client.get("/api/orders/admin/");
        setPlacedOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPlacedOrders();
  }, []);

  console.log(placedOrders);

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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Items</th>
            <th scope="col">Account id</th>
            <th scope="col">payment mode</th>
            <th scope="col">payment status</th>
            <th scope="col">Order status</th>
            <th scope="col">Change status</th>
          </tr>
        </thead>
        <tbody>
          {placedOrders?.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                {order?.items?.map((item) => (
                  <>
                    <p key={item.id}>{item?.product?.title},</p>
                  </>
                ))}
              </td>
              <td> {order.account} </td>
              <td> {order.payment_mode} </td>
              <td> {order.payment_status} </td>
              <td> {order.status} </td>
              <td>
                <select name="order_status">
                  <option selected>none</option>
                  <option value="">processing</option>
                  <option value="">delivered</option>
                  <option value="">shipped</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
