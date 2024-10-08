import { useContext, useState } from "react";
import "./selectpayment.css";
import { toast } from "react-toastify";
import {
  CartItemContext,
  FinalItemsToOrderContext,
} from "../../../context/AllContext";
import client from "../../../api_client/api_client";
import { useNavigate } from "react-router-dom";
const SelectPaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [finalItemToOrder] = useContext(FinalItemsToOrderContext);
  const [isLoading, setIsLoading] = useState(false);
  const [, setCartItems] = useContext(CartItemContext);
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    if (paymentMethod === null) {
      toast.warn("Please select a payment method");
      return;
    }
    const { items, address } = finalItemToOrder;
    items.forEach((item) => {
      delete item["price"];
    });
    const data = {
      address,
      items,
    };

    if (paymentMethod == "card") {
      try {
        setIsLoading(true);
        const response = await client.post("/api/orders/card/", data);
        const session_url = response.data.session_url;
        window.open(session_url, "_blank").focus();
        toast.info("Please pay with card to complete order");
        client.delete("/api/cart/delete_all/");
        navigate("/");
      } catch (error) {
        console.error({ error });
        toast.error("There was an error to process the order");
      } finally {
        setIsLoading(false);
      }
      return;
    }

    if (paymentMethod == "cash") {
      try {
        setIsLoading(true);
        const response = await client.post("/api/orders/", data);
        if (response.status == 201) {
          client.delete("/api/cart/delete_all/");
          toast.success("Your order has been placed");
          setCartItems([]);
          navigate("/profile/my_orders/");
        }
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="container my-5">
      <h2>
        Select payment method <i className="fa-solid fa-cash-register"></i>
      </h2>
      <p>
        Please select a payment method how you want to pay. If you want to pay
        with credit/debit card you can choose card. If you want to pay after
        delivery select cash on delivery.
      </p>
      <div className="mt-5">
        <h5 className="mb-3">
          <input
            type="radio"
            name="payment"
            className="payment_select_inp"
            onClick={() => setPaymentMethod("card")}
          />{" "}
          Debit/Credit card
        </h5>

        <h5>
          <input
            type="radio"
            name="payment"
            className="payment_select_inp"
            onClick={() => setPaymentMethod("cash")}
          />{" "}
          Cash on delivery
        </h5>
        {!isLoading && (
          <button className="base_button_2 mt-5" onClick={handlePlaceOrder}>
            Place order
          </button>
        )}
        {isLoading && (
          <button className="base_button_2 mt-5" disabled>
            Place order
          </button>
        )}
      </div>
    </section>
  );
};

export default SelectPaymentMethod;
