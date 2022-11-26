import Link from "next/link";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCartList, getTotalPrice } from "../../redux/cart/cartSelector";
import { getTotalPrise } from "../../redux/cart/cartSlice";
import styles from "./sass/CartTotal.module.scss";

const CartTotal = () => {
  const dispatch = useDispatch();

  const cartList = useSelector(getCartList);
  const totalPrice = useSelector(getTotalPrice);
  console.log("object", totalPrice);

  const deliveryPrice = 35;

  useEffect(() => {
    if (cartList.length) {
      const totalValue = cartList.reduce((acc, item) => {
        acc += item.price * item.quntity;
        return +acc;
      }, 0);
      dispatch(getTotalPrise(totalValue));
    }
  }, [cartList]);

  return (
    <div className={styles.cart_total}>
      <ul className={styles.cart_total_el}>
        <li className={styles.cart_total_item}>
          <p className={styles.text}>Товари</p>
          <p className={styles.text}>{totalPrice} грн</p>
        </li>
        <li className={styles.cart_total_item}>
          <p className={styles.text}>Доставка</p>
          <p className={styles.text}>35 грн</p>
        </li>
        <li className={styles.cart_total_item}>
          <p className={styles.total}>Разом</p>
          <p className={styles.total}>{totalPrice + deliveryPrice} грн</p>
        </li>
      </ul>
      <div className={styles.btn_wrapper}>
        <Link href="/chackout/selfdelivery">
          <a className={styles.btn}> Самовиніс</a>
        </Link>
        <Link href="/chackout/delivery">
          <a className={styles.btn_delivery}> Доставка</a>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
