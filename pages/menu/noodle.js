import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../src/components/Heading/Heading";
import ProductCards from "../../src/components/ProductCard/ProductCard";
import { getNoodles } from "../../src/redux/userMenu/userOperation";

export default function Noodle() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNoodles());
  }, []);
  return (
    <section>
      <ProductCards />
    </section>
  );
}
