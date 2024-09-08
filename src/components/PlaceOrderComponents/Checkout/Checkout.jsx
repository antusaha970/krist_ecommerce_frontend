import { useContext } from "react";
import { CartItemContext } from "../../../context/AllContext";

const Checkout = () => {
  const [cartItems] = useContext(CartItemContext);
  return (
    <section className="container my-5">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-8"></div>
        <div className="col-12 col-sm-4 col-md-4"></div>
      </div>
    </section>
  );
};

export default Checkout;
