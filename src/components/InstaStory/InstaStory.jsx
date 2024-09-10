import "./instastory.css";
import s1 from "../../assets/instaStory/s1.jpg";
import s2 from "../../assets/instaStory/s2.jpeg";
import s4 from "../../assets/instaStory/s4.jpg";
import OurService from "../Shared/OurService/OurService";
const InstaStory = () => {
  return (
    <section className="container m_top_bottom">
      <h2 className="fw-bold text-center">Our Instagram Story</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img src={s1} alt="story" className="img-fluid" />
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img src={s2} alt="story" className="img-fluid" />
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img src={s4} alt="story" className="img-fluid" />
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a href="">
            <img src={s2} alt="story" className="img-fluid" />
          </a>
        </div>
      </div>
      <OurService />
    </section>
  );
};

export default InstaStory;
