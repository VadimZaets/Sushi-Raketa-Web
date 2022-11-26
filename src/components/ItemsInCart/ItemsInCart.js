import { useSelector } from "react-redux";
import { getCartList, getCartQuntity } from "../../redux/cart/cartSelector";
import styles from "./sass/ItemsInCart.module.scss";

const ItemsInCart = () => {
  const quntity = useSelector(getCartQuntity);
  console.log("quntity", quntity);

  return (
    <>
      <div className={styles.wrapp}>{quntity}</div>
    </>
  );
};
export default ItemsInCart;
