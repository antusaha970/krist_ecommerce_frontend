import "./OurFeatures.css";
import paymentImg from "../../assets/stock/payment.png";
import deliveryImg from "../../assets/stock/delivery.png";

const OurFeatures = () => {
  return (
    <section className="our_feature my-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <h3 className="text-center">
              <i className="fa-solid fa-lock"></i> All secure payment methods
            </h3>
            <img src={paymentImg} alt="payment_methods" className="img-fluid" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center">
            <h3>
              <i className="fa-solid fa-face-smile"></i> Satisfaction guaranteed
            </h3>
            <p>
              Made with premium quality materials. Cozy yet lasts the test of
              time
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h3 className="text-center">
              <i className="fa-solid fa-truck"></i> World wide delivery
            </h3>
            <img
              src={deliveryImg}
              alt="payment_methods"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
