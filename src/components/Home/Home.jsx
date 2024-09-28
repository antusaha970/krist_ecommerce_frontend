import BestSeller from "../BestSeller/BestSeller";
import DealsCounter from "../DealsCounter/DealsCounter";
import Hero from "../Hero/Hero";
import InstaStory from "../InstaStory/InstaStory";
import OurFeatures from "../OurFeatures/OurFeatures";
import ShopByCategorySlider from "../ShopByCategorySlider/ShopByCategorySlider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <ShopByCategorySlider />
      <BestSeller />
      <DealsCounter />
      <Testimonial />
      <InstaStory />
      <OurFeatures />
    </>
  );
};

export default Home;
