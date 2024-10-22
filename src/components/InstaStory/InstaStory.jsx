import "./instastory.css";
import s1 from "../../assets/instaStory/s1.jpg";
import s2 from "../../assets/instaStory/s2.jpeg";
import s4 from "../../assets/instaStory/s4.jpg";
import OurService from "../Shared/OurService/OurService";
const InstaStory = () => {
  return (
    <section className="container m_top_bottom">
      <h2 className="fw-bold text-center">Our Instagram Story</h2>
      <div className="row g-3">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="blog-card">
            <img className="blog-img" src={s2} />
            <div className="text-overlay">
              <h2>See how ranver wear</h2>
              <p>
                Know how to choose t-shirt &nbsp;
                <a href="#" className="read-more">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="blog-card">
            <img className="blog-img" src={s4} />
            <div className="text-overlay">
              <h2>Janifer best outfit</h2>
              <p>
                Know more about janifer &nbsp;
                <a href="#" className="read-more">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="blog-card">
            <img className="blog-img" src={s1} />
            <div className="text-overlay">
              <h2>Aditi best t-shirt</h2>
              <p>
                See how aditi wears &nbsp;
                <a href="#" className="read-more">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <OurService />
    </section>
  );
};

export default InstaStory;
