import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../src/components/Heading/Heading";
import ProductCards from "../../src/components/ProductCard/ProductCard";
import { getBurgers } from "../../src/redux/userMenu/userOperation";

export default function Burger() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBurgers());
  }, []);
  return (
    <section>
      <ProductCards />
    </section>
  );
}
