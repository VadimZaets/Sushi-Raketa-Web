import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../src/components/Heading/Heading";
import ProductCards from "../../src/components/ProductCard/ProductCard";
import { getRolls } from "../../src/redux/userMenu/userOperation";

export default function Rolls() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRolls());
  }, []);

  return (
    <section>
      <ProductCards />
    </section>
  );
}
