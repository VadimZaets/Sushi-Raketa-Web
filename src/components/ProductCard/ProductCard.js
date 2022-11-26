import React from "react";
import styles from "../ProductCard/sass/ProductCard.module.scss";
import Layout from "../../layout/layout";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import ProgressButton from "react-progress-button";
import { setItemsInCart } from "../../redux/cart/cartSlice";
import { setCurrentInfo } from "../../redux/Info/infoSlice";
import { getProductsList } from "../../redux/userMenu/userSelector";

const ProductCards = ({}) => {
  const product = useSelector(getProductsList);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = (cart) => {
    event.preventDefault();
    dispatch(setItemsInCart(cart));
  };
  const handleInfo = (info) => {
    dispatch(setCurrentInfo(info));
    router.push(`/info/${info.name}`);
  };

  return (
    <Layout>
      <div className={styles.list}>
        <ul className={styles.list_el}>
          {product.map(
            ({ _id, img, weight, number, name, description, price }) => (
              <li key={_id} className={styles.item}>
                <img src="/test.png" alt={description} className={styles.img} />
                <div className={styles.content}>
                  <h3 className={styles.title}>{name}</h3>
                  <div className={styles.description_block}>
                    <p
                      className={styles.description}
                      onClick={() =>
                        handleInfo({
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
                      {description}
                    </p>
                  </div>
                  <div className={styles.recent_cart}>
                    <div className={styles.cart_wrapper}>
                      <p className={styles.product_price}>{price} грн</p>
                      <p className={styles.product_weight}>| {weight} г</p>
                    </div>

                    <a
                      href=""
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
                      className={styles.product_btn}
                    >
                      Замовити
                    </a>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductCards;

/* 
                <div className={styles.bottom_block}>
                  <p className={styles.product_weight}>
                    {weight} г · {number} шт
                  </p>

                  <h2 className={styles.product_title}>{title}</h2>
                  <p className={styles.product_description}>{description}</p>
                  <div className={styles.product_buybox}>
                    <button className={styles.product_btn}>В КОШИК</button>
                    <p className={styles.product_price}>{price} грн</p>
                  </div>
                </div> */

//  <div
//     className={styles.product_wrap}
//     onClick={() =>
//       handleInfo({
//         img,
//         weight,
//         number,
//         title,
//         description,
//         price,
//       })
//     }
//   >
//     <img src={img} alt="" className={styles.product_img} />
//     <div className={styles.product_content}>
//       <h3 className={styles.product_title}>
//         <a href="">{title}</a>
//       </h3>
//       <div className={styles.product_description}>
//         <p className={styles.product_description_text}>
//           {description}
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className={styles.product_cart}>
//     <div className={styles.product_cart_wrapper}>
//       <p className={styles.product_price}>{price} грн</p>
//       <p className={styles.product_weight}>| {weight} г</p>
//     </div>

//     <button
//       onClick={() =>
//         handleClick({
//           _id,
//           img,
//           weight,
//           number,
//           title,
//           description,
//           price,
//         })
//       }
//       className={styles.product_btn}
//     >
//       Замовити
//     </button>
//   </div>
