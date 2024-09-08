import { useEffect, useState } from "react";
import Modal from "react-modal";
import client from "../../api_client/api_client";
import Loader from "../Shared/Loader/Loader";
import "./cart.css";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80vh",
    overflowY: "auto",
  },
};
const Cart = ({ modalIsOpen, setIsOpen }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [changed, setChanged] = useState(true);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        setIsLoading(true);
        const response = await client.get("/api/cart/");
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCartItems();
  }, [changed]);

  console.log(cartItems);

  function closeModal() {
    setIsOpen(false);
  }

  const handleCartItemRemove = async (id) => {
    try {
      const response = await client.delete(`/api/cart/${id}/`);
      if (response.status == 204) {
        toast.success("Removed from cart");
        setChanged((preState) => !preState);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="cart Modal"
    >
      <button onClick={closeModal} className="base_button mb-2">
        close
      </button>
      {isLoading && <Loader />}

      <section className="cart_section">
        <h4>You have {cartItems.length} items in your Cart</h4>

        {cartItems?.map((item) => (
          <div key={item.id}>
            <div className="row border border-bottom my-3 py-3">
              <div className="col-4">
                <img
                  src={
                    item.product.product_images.length > 0
                      ? `http://localhost:8000/${item.product.product_images[0].images}`
                      : ""
                  }
                  alt="product image"
                  className="cart_pd_img"
                />
              </div>
              <div className="col-8">
                <p className="fw-bold">{item.product.title}</p>
                <p className="">${item.product.price} </p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleCartItemRemove(item.product.id)}
                >
                  <i className="fa-solid fa-trash"></i> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Modal>
  );
};

export default Cart;
