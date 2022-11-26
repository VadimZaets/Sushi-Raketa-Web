import CartList from "../../components/CartList/CartList";
import DeliveryDetails from "../../components/DeliveryDetails/DeliveryDetails";
import Heading from "../../components/Heading/Heading";
import Layout from "../../layout/layout";
import styles from "./sass/DeliveryView.module.scss";
import { getCartList } from "../../redux/cart/cartSelector";
import { useSelector } from "react-redux";
import Link from "next/link";
const DeliveryView = () => {
  const arr = useSelector(getCartList);
  return (
    <Layout>
      {arr.length > 0 ? (
        <section>
          <Heading text="Підтвердження замовлення" />
          <div className={styles.block_wrapper}>
            <DeliveryDetails />

            <CartList />
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

export default DeliveryView;
