import Layout from "../../layout/layout";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../../redux/Info/infoSelector";
import styles from "./sass/InfoView.module.scss";
import { setItemsInCart } from "../../redux/cart/cartSlice";
const InfoView = () => {
  const dispatch = useDispatch();
  const info = useSelector(getInfo);
  const handleClick = (cart) => {
    dispatch(setItemsInCart(cart));
  };
  const { _id, name, price, img, weight, description, number } = info;
  return (
    <Layout>
      <section>
        <div className={styles.wrapper}>
          <img src={img} alt={description} className={styles.img} />
          <div className={styles.right_block}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.price_block}>
              <p className={styles.price}>{price} грн</p>
              <button
                className={styles.btn}
                onClick={() =>
                  handleClick({
                    _id,
                    img,
                    weight,
                    number,
                    name,
                    description,
                    price,
                  })
                }
              >
                Замовити
              </button>
            </div>
            <p className={styles.description}>
              Склад: {description} <br /> Вага: {weight} г <br />
              Кількість ролів: {number} шт
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InfoView;
