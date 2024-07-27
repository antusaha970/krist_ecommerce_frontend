import "./hero.css";
import bannerImg from "../../assets/stock/banner.webp";

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
              <h5 className="">UPTO OFF 40%</h5>
              <button className="base_button">Shop now</button>
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
