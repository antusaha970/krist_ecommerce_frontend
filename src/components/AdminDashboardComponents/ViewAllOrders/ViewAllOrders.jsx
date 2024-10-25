import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../api_client/api_client";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader/Loader";
import AdminDashBoardMenu from "../AdminDashBoardMenu/AdminDashBoardMenu";

export const ViewAllOrders = () => {
  const [placedOrders, setPlacedOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllPlacedOrders = async () => {
      try {
        setIsLoading(true);
        const response = await client.get("/api/orders/admin/");
        setPlacedOrders(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllPlacedOrders();
  }, []);

  const handleChangeOrderStatus = async (e, id) => {
    const data = { status: e.target.value };
    try {
      const response = await client.patch(`/api/orders/admin/${id}/`, data);
      if (response.status == 200) {
        toast.success("Changed order status. Reload to see current status");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container-fluid my-5">
      <div className="row g-2">
        <div className="col-md-2 col-sm-12 col-12 shadow-sm ps-4 text-center">
          <AdminDashBoardMenu />
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          {isLoading && <Loader />}
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
                    <select
                      name="order_status"
                      onChange={() => handleChangeOrderStatus(event, order.id)}
                    >
                      <option selected>none</option>
                      <option value="processing">processing</option>
                      <option value="delivered">delivered</option>
                      <option value="shipped">shipped</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
