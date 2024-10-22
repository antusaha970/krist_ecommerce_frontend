import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import client from "../../api_client/api_client";
import "./ShopByCategory.css";
import Loader from "../Shared/Loader/Loader";
import { Link } from "react-router-dom";
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
const ShopByCategorySlider = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        setIsLoading(true);
        const response = await client.get("/api/products/all_categories/");
        setAllCategory(response.data);
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getAllCategory();
  }, []);

  return (
    <section className="container m_top_bottom">
      <h2 className="text-center fw-bold">Available categories</h2>
      {isLoading && <Loader />}
      <div className="slider-container">
        <Slider {...settings}>
          {allCategory?.map((category) => (
            <div key={category.name} className="text-center category_text">
              <img
                src={category.thumbnail}
                alt="display_image"
                className="coursel_img m-auto"
              />
              <Link
                to={`/products?category=${category.name}`}
                className="text-decoration-none"
              >
                <h4 className=" my-1"> {category.name} </h4>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShopByCategorySlider;
