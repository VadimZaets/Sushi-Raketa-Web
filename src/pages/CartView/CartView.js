import { style } from "@mui/system";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartList from "../../components/CartList/CartList";
import CartTotal from "../../components/CartTotal/CartTotal";
import Heading from "../../components/Heading/Heading";
import Layout from "../../layout/layout";
import { getCartList } from "../../redux/cart/cartSelector";
import styles from "./sass/CartView.module.scss";
const CartView = () => {
  const arr = useSelector(getCartList);
  return (
    <Layout>
      {arr.length > 0 ? (
        <section>
          <Heading text="Моє замовлення" />
          <div className={styles.block_wrapper}>
            <CartList />

            <CartTotal />
          </div>
        </section>
      ) : (
        <div className={styles.cart_empty}>
          <img src="/logo.png" alt="logo" width={100} height={100} />
          <h2>Корзина пуста</h2>
          <Link href="/">
            <a className={styles.btn}>На головну</a>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default CartView;
