import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import client from "../../api_client/api_client";
import "./ShopByCategory.css";
import Loader from "../Shared/Loader/Loader";
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
      <h2 className="text-center fw-bold">Shop by category</h2>
      {isLoading && <Loader />}
      <div className="slider-container">
        <Slider {...settings}>
          {allCategory?.map((category) => (
            <div key={category.name}>
              <div className="category_box">
                <h3 className="category_title">{category.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShopByCategorySlider;
