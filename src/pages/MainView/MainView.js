import Carousel from "../../components/Carousel/Carousel";
import Counter from "../../components/Counter/Counter";

import Heading from "../../components/Heading/Heading";
import ProductCards from "../../components/ProductCard/ProductCard";

const MainView = () => {
  return (
    <>
      <Carousel />
      <Heading text="Пропозиції тижня :" />
      <ProductCards />
    </>
  );
};

export default MainView;
