import { useEffect, useState } from "react";
import client from "../../api_client/api_client";
import Slider from "react-slick";
import "./testimonial.css";
import profile_placeholder from "../../assets/stock/profile_placeholder.webp";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getTopReviews = async () => {
      try {
        const response = await client.get("/api/top_reviews/");
        setReviews(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    getTopReviews();
  }, []);

  return (
    <section className="container my-5 ">
      <div>
        <h2 className="fw-bold text-center mb-3">What our customer say</h2>
      </div>

      <Slider {...settings}>
        {reviews?.map((review) => (
          <div className="tour-item " key={review.id}>
            <div className="tour-desc bg-white">
              <div className="tour-text color-grey-3 text-center">
                {review.body.slice(0, 250)}
              </div>
              <div className="d-flex justify-content-center pt-2 pb-2">
                <img
                  className="tm-people profile_placeholder"
                  src={profile_placeholder}
                  alt="profile place holder"
                />
              </div>
              <div className="link-name d-flex justify-content-center">
                {review.reviewer.first_name} {review.reviewer.last_name}
              </div>
              <div className="link-position d-flex justify-content-center">
                {review.email}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
