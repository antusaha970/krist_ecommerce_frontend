import { useEffect, useState } from "react";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import client from "../../../api_client/api_client";
import AddressCard from "../AddressCard/AddressCard";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./manageAddress.css";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ManageAddress = () => {
  const { register, handleSubmit, reset } = useForm();

  const [addresses, setAddresses] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await client.get("/api/delivery_address/");
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAddresses();
  }, []);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await client.post("/api/delivery_address/", data);
      if (response.status == 201) {
        reset();
        toast.success("New delivery address added");
        setIsOpen(false);
      }
    } catch (error) {
      console.error({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container m_top_bottom">
      <h2 className="mb-4">My Addresses</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <ProfileNavigation />
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          <div className="mb-2">
            <button className="base_button_2" onClick={openModal}>
              <i className="fa-solid fa-plus"></i> Add new address
            </button>
          </div>
          {addresses?.map((address) => (
            <AddressCard address={address} key={address.id} />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="p-1 manage_address_form_width">
          <h4 className="fw-bold">Add new Address</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="state"
                placeholder="Enter your state"
                required
                {...register("state")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                city *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="city"
                placeholder="Enter your city"
                required
                {...register("city")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="area" className="form-label">
                area *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="area"
                placeholder="Enter your area"
                required
                {...register("area")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apartment" className="form-label">
                apartment *
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="apartment"
                placeholder="Enter your apartment"
                required
                {...register("apartment")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pin_code" className="form-label">
                Pin Code *
              </label>
              <input
                type="number"
                className="form-control custom-input"
                id="pin_code"
                placeholder="Enter your pin_code"
                required
                {...register("pin_code")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile_number" className="form-label">
                Mobile number *
              </label>
              <input
                type="number"
                className="form-control custom-input"
                id="mobile_number"
                placeholder="Enter your Mobile number"
                required
                {...register("mobile_number")}
              />
            </div>
            {!loading && (
              <button className="base_button" type="submit">
                Submit
              </button>
            )}
            {loading && (
              <button className="base_button" disabled>
                Please wait...
              </button>
            )}
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default ManageAddress;
