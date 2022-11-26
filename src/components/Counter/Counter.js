import { useSelector, useDispatch } from "react-redux";
import { removeItem, setItemsInCart } from "../../redux/cart/cartSlice";
import styles from "./sass/Counter.module.scss";

const Counter = ({ id, quntity, cart }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(id));
  };
  const handleClick = () => {
    dispatch(setItemsInCart(cart));
  };
  return (
    <div className={styles.counter}>
      <button onClick={handleClick} className={styles.btn}>
        +
      </button>
      <input type="number" value={quntity} className={styles.input} />
      {quntity > 1 ? (
        <button onClick={handleRemove} className={styles.btn}>
          -
        </button>
      ) : null}
    </div>
  );
};

export default Counter;
