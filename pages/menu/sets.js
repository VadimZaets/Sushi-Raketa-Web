import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../src/components/Heading/Heading";
import ProductCards from "../../src/components/ProductCard/ProductCard";
import { getSets } from "../../src/redux/userMenu/userOperation";

export default function Rolls() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSets());
  }, []);
  return (
    <section>
      <ProductCards />
    </section>
  );
}
