import { Link } from "react-router-dom";
import banner from "../../assets/stock/bannerImg.jpg";

const LandingBanner = () => {
  return (
    <section className="mb-5">
      <Link to={"/products"}>
        <img
          src={banner}
          alt="landing_banner"
          className="img-fluid"
          title="buy exclusive t-shirts"
        />
      </Link>
    </section>
  );
};

export default LandingBanner;
