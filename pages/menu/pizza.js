import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../src/components/Heading/Heading";
import ProductCards from "../../src/components/ProductCard/ProductCard";
import { getPizzas } from "../../src/redux/userMenu/userOperation";

export default function Pizza() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
  }, []);
  return (
    <section>
      <ProductCards />
    </section>
  );
}
