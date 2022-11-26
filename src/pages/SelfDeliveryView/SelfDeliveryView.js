import CartList from "../../components/CartList/CartList";
import Heading from "../../components/Heading/Heading";
import SelfDeliveryDetails from "../../components/SelfDeliveryDetails/SelfDeliveryDetails";
import Layout from "../../layout/layout";
import styles from "./sass/SelfDeliveryView.module.scss";
import { getCartList } from "../../redux/cart/cartSelector";
import { useSelector } from "react-redux";
import Link from "next/link";
const SelfDeliveryView = () => {
  const arr = useSelector(getCartList);
  return (
    <Layout>
      {arr.length > 0 ? (
        <section>
          <Heading text="Підтвердження замовлення" />
          <div className={styles.block_wrapper}>
            <div className={styles.left_block}>
              <SelfDeliveryDetails />
            </div>
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

export default SelfDeliveryView;
