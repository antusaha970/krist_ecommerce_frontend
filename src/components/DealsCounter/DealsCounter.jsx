import { Link } from "react-router-dom";
import deals from "../../assets/stock/deals.webp";
const DealsCounter = () => {
  return (
    <section className="container m_top_bottom">
      <div className="row align-items-center g-4">
        <div className="col-12 col-sm-12 col-md-6">
          <h2 className="fw-bold">Deals of the month</h2>
          <p>
            We focus on carefully selecting the best clothing that is
            comfortable, looks great, and makes you confident. Apart from the
            fabric, design and fit, we go through strict quality control
            parameters to give you what you truly deserve. The power of a good
            outfit is how it can influence your perception of yourself.
          </p>
          <Link to={"/products"} className="base_button_2 text-decoration-none">
            View product <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <img src={deals} alt="deals" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default DealsCounter;
