import { useContext, useEffect, useState } from "react";
import client from "../../../api_client/api_client";
import "./selectShippingAddress.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FinalItemsToOrderContext } from "../../../context/AllContext";

const SelectShippingAddress = () => {
  const [deliveryAddresses, setDeliveryAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [finalItemToOrder, setFinalItemToOrder] = useContext(
    FinalItemsToOrderContext
  );
  const navigate = useNavigate();
  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await client.get("/api/delivery_address/");
        setDeliveryAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAddresses();
  }, []);

  const handleDeliverHere = () => {
    if (selectedAddress === null) {
      toast.warn("Please select a delivery address");
      return;
    }

    const finalItem = { items: finalItemToOrder, address: selectedAddress };
    setFinalItemToOrder(finalItem);
    navigate("/order/payment_method");
  };

  return (
    <section className="container my-5">
      <h2 className="mb-2">
        Shipping address <i className="fa-solid fa-location-dot"></i>
      </h2>
      <div className="mt-5">
        <h4>Select a delivery address</h4>
        <p>
          Please select the address where you want to receive you order or add
          new address from profile
        </p>
      </div>
      {deliveryAddresses?.map((address) => (
        <div key={address.id} className="border p-3 my-2">
          <h6>
            <input
              type="radio"
              name="selected_address"
              className="address_select_inp me-2"
              onClick={() => setSelectedAddress(address.id)}
            />
            {address.state}
          </h6>
          <p>
            {address.city}, {address.area}
          </p>
          <p>
            <i className="fa-solid fa-phone-volume me-3"></i>
            {address.mobile_number}
          </p>
        </div>
      ))}
      <div className="mt-4">
        <button className="base_button_2" onClick={handleDeliverHere}>
          Deliver here <i className="fa-solid fa-truck"></i>
        </button>
        <Link
          to={"/profile/manage_address"}
          className="base_button_2 ms-2 text-decoration-none"
        >
          Add new address <i className="fa-solid fa-plus"></i>
        </Link>
      </div>
    </section>
  );
};

export default SelectShippingAddress;
