import deals from "../../assets/stock/deals.png";
const DealsCounter = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-sm-12 col-md-6">
          <h2 className="fw-bold">Deals of the month</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            repellendus facilis incidunt ab at reiciendis impedit exercitationem
            qui eligendi dolores modi soluta dicta pariatur, est velit! Unde
            laborum ab sit?
          </p>
          <button className="base_button_2">
            View product <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <img
            src={deals}
            alt="deals"
            className="img-fluid"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default DealsCounter;
