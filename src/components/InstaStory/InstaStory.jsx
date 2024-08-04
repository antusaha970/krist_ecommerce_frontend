import "./instastory.css";
import s1 from "../../assets/instaStory/s1.jpg";
import s2 from "../../assets/instaStory/s2.jpeg";
import s3 from "../../assets/instaStory/s3.jpeg";
import s4 from "../../assets/instaStory/s4.jpg";
const InstaStory = () => {
  return (
    <section className="container my-5">
      <h2 className="fw-bold text-center">Our Instagram Story</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img
              src={s1}
              alt="story"
              className="img-fluid"
              data-aos="fade-right"
            />
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img
              src={s2}
              alt="story"
              className="img-fluid"
              data-aos="fade-right"
            />
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img
              src={s4}
              alt="story"
              className="img-fluid"
              data-aos="fade-left"
            />
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img
              src={s2}
              alt="story"
              className="img-fluid"
              data-aos="fade-left"
            />
          </a>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3 col-12 col-sm-4">
          <i className="fa-solid fa-truck-fast icon_ints mb-2"></i>
          <h5 className="fw-bold">Free Shipping</h5>
          <p>Free shipping on orders 150$+</p>
        </div>
        <div className="col-md-3 col-12 col-sm-4">
          <i className="fa-solid fa-dollar-sign icon_ints mb-2"></i>
          <h5 className="fw-bold">Money Guarantee</h5>
          <p>Free shipping on orders 150$+</p>
        </div>
        <div className="col-md-3 col-12 col-sm-4">
          <i className="fa-solid fa-headset icon_ints mb-2"></i>
          <h5 className="fw-bold">Online support</h5>
          <p>24 hours a day,7days a week</p>
        </div>
        <div className="col-md-3 col-12 col-sm-4">
          <i className="fa-solid fa-credit-card icon_ints mb-2"></i>
          <h5 className="fw-bold">Flexible Payment</h5>
          <p>Pay with multiple credit card</p>
        </div>
      </div>
    </section>
  );
};

export default InstaStory;
