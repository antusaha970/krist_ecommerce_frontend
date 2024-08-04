import DealsCounter from "../DealsCounter/DealsCounter";
import Hero from "../Hero/Hero";
import InstaStory from "../InstaStory/InstaStory";
import ShopByCategorySlider from "../ShopByCategorySlider/ShopByCategorySlider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <ShopByCategorySlider />
      <DealsCounter />
      <Testimonial />
      <InstaStory />
    </>
  );
};

export default Home;
