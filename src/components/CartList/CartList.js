import React from "react";
import Image from "next/image";
import styles from "../CartList/sass/CartList.module.scss";
import Layout from "../../layout/layout";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { getCartList } from "../../redux/cart/cartSelector";
import { deleteItemsFromCart } from "../../redux/cart/cartSlice";
import Counter from "../Counter/Counter";
// const product = [
//   {
//     id: 1,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 2,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
//   {
//     id: 3,
//     img: "/philadelphia.png",
//     weight: "1000",
//     number: "32",
//     title: "Роли",
//     description:
//       "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
//     price: "500",
//     path: "/sushi",
//   },
// ];

const CartList = () => {
  const cartList = useSelector(getCartList);
  console.log("cartList :>> ", cartList);
  const dispatch = useDispatch();
  const handleDelete = (cart) => {
    dispatch(deleteItemsFromCart({ id: cart._id }));
  };

  return (
    <div className={styles.cart_list}>
      <ul>
        {cartList.map(
          ({
            _id,
            img,
            weight,
            number,
            name,
            description,
            price,
            totalItemPrice,
            quntity,
          }) => (
            <li key={_id} className={styles.cart_list_item}>
              <div className={styles.cart_list_left}>
                <img src={img} alt="logo" className={styles.img} />
                <div className={styles.description}>
                  <h2 className={styles.cart_title}>{name}</h2>
                  <p className={styles.product_weight}>
                    {weight} г · {number} шт
                  </p>
                </div>
              </div>
              <div className={styles.cart_price_wrapper}>
                <Counter
                  id={_id}
                  quntity={quntity}
                  cart={{
                    _id,
                    img,
                    weight,
                    number,
                    name,
                    description,
                    price,
                    quntity,
                  }}
                />
                <p className={styles.cart_price}>{totalItemPrice} грн</p>
                <button
                  onClick={() =>
                    handleDelete({
                      _id,
                    })
                  }
                  className={styles.cart_btnDel}
                >
                  <svg className={styles.btnDel_cross}>
                    <use href="/sprite.svg#delete"></use>
                  </svg>
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CartList;
