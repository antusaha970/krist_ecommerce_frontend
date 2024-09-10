import { Link } from "react-router-dom";
import deals from "../../assets/stock/deals.webp";
const DealsCounter = () => {
  return (
    <section className="container m_top_bottom">
      <div className="row align-items-center">
        <div className="col-12 col-sm-12 col-md-6">
          <h2 className="fw-bold">Deals of the month</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            repellendus facilis incidunt ab at reiciendis impedit exercitationem
            qui eligendi dolores modi soluta dicta pariatur, est velit! Unde
            laborum ab sit?
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
