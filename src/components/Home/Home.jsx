import DealsCounter from "../DealsCounter/DealsCounter";
import Hero from "../Hero/Hero";
import InstaStory from "../InstaStory/InstaStory";
import ShopByCategorySlider from "../ShopByCategorySlider/ShopByCategorySlider";

const Home = () => {
  return (
    <>
      <Hero />
      <ShopByCategorySlider />
      <DealsCounter />
      <InstaStory />
    </>
  );
};

export default Home;
