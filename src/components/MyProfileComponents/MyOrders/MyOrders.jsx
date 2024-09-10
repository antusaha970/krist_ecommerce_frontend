import { useEffect, useState } from "react";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import client, { backendURL } from "../../../api_client/api_client";
import "./myOrders.css";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [MyOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const response = await client.get("/api/orders/");
        setMyOrders(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    getAllOrders();
  }, []);

  return (
    <section className="container m_top_bottom">
      <h2 className="mb-4">My Orders</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <ProfileNavigation />
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          <div className="row">
            {MyOrders?.map((order) => {
              return order?.items?.map((item) => (
                <div key={item.id} className="row mb-4">
                  <div className="col-12 col-md-8">
                    <div className="d-flex">
                      <div>
                        <img
                          src={`${backendURL}${item.product.product_images[0].images}`}
                          alt="product image"
                          className="order_pd_img"
                        />
                      </div>
                      <div>
                        <h5 className="ms-2 fw-bold"> {item.product.title} </h5>
                        <p className="ms-2">Qty: {item.quantity} </p>
                      </div>
                    </div>
                    <h6 className="mt-2">
                      Status: <span className="fw-bold">{order.status}</span>
                    </h6>
                    <p className="mb-0">
                      Payment status :{" "}
                      <span className="fw-bold">{order.payment_status}</span>
                    </p>
                    <p>
                      Payment mode :{" "}
                      <span className="fw-bold">{order.payment_mode}</span>{" "}
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <h5 className="mb-3">
                      ${item.product.price * item.quantity}
                    </h5>
                    <Link
                      to={`/products/${item.product.id}`}
                      className="base_button_2 text-decoration-none"
                    >
                      write a review <i className="fa-solid fa-pen"></i>
                    </Link>
                  </div>
                </div>
              ));
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
