import { useContext, useEffect, useState } from "react";
import { CartItemContext } from "../../../context/AllContext";
import { backendURL } from "../../../api_client/api_client";
import "./checkout.css";

const Checkout = () => {
  const [cartItems] = useContext(CartItemContext);
  const [itemToOrder, setItemToOrder] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    const items = [];
    cartItems?.forEach((item) => {
      items.push({
        product: item.product.id,
        quantity: 1,
        price: item.product.price,
      });
    });
    setItemToOrder(items);
  }, [cartItems]);
  useEffect(() => {
    const total = itemToOrder.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
    setGrandTotal(total);
  }, [itemToOrder]);

  console.log(itemToOrder);
  const handlePlusQuantity = (ind) => {
    const items = [...itemToOrder];
    items[ind].quantity = items[ind].quantity + 1;
    setItemToOrder(items);
  };
  const handleMinusQuantity = (ind) => {
    const items = [...itemToOrder];
    if (items[ind].quantity > 0) {
      items[ind].quantity = items[ind].quantity - 1;
      setItemToOrder(items);
    }
  };
  return (
    <section className="container my-5">
      <h2 className="mb-2">Checkout</h2>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-8">
          {cartItems?.map((item, ind) => (
            <>
              <div key={item.id}>
                <div className="d-flex align-items-center ">
                  <img
                    src={`${backendURL}${item.product.product_images[0].images}`}
                    alt="product image"
                    className="check_pd_img"
                  />
                  <h5 className="ms-4 fw-bold fs-4">{item.product.title}</h5>
                </div>
                <h6 className="fs-5">Unit price: ${item.product.price}</h6>
                <div className="quantity-container">
                  <span className="fw-bold me-2">Quantity</span>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm quantity-btn"
                    onClick={() => handleMinusQuantity(ind)}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    className="quantity-input"
                    defaultValue={itemToOrder[ind]?.quantity}
                    readOnly=""
                  />
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm quantity-btn"
                    onClick={() => handlePlusQuantity(ind)}
                  >
                    +
                  </button>
                </div>
                <p className="fw-bold">
                  Subtotal: ${item.product.price * itemToOrder[ind]?.quantity}
                </p>
              </div>
              <hr />
            </>
          ))}
        </div>
        <div className="col-12 col-sm-4 col-md-4">
          <h3 className="fw-bold">Grand total: ${grandTotal} </h3>
          <button className="base_button_2 mt-3">Proceed to checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
