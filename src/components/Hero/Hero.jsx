import "./hero.css";
import bannerImg from "../../assets/stock/banner.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container">
      <div className="gray_box">
        <div className="row align-items-center g-4">
          <div className="col-12 col-sm-6 col-md-6">
            <div>
              <h2 className="h4 fw-bold">Classic Exclusive</h2>
              <h2 className="h1 fw-bold banner_title">
                Women&apos;s Collection
              </h2>
              <p>
                On krist you will get best deals on exclusive t-shirts. Buy from
                large collection.
              </p>
              <h5 className="">UPTO OFF 40%</h5>
              <Link
                to={"/products"}
                className="base_button text-decoration-none"
              >
                Shop now <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 text-center col-md-6">
            <img
              src={bannerImg}
              alt="banner img"
              className="img-fluid banner_img"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
