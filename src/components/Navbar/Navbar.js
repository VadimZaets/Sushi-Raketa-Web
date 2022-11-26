import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./sass/Navbar.module.scss";
import { BiShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import BurgerModal from "../BurgerModal/BurgerModal";
import { useSelector } from "react-redux";
import { getCartList } from "../../redux/cart/cartSelector";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

const Navbar = () => {
  const cartList = useSelector(getCartList);

  const [modalOpen, setModalOpen] = React.useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onModalClose = (e) => {
    setModalOpen(false);
  };

  return (
    <header>
      <nav className={styles.nav}>
        <button className={styles.burger} onClick={onModalOpen}>
          <GiHamburgerMenu style={{ width: "18px", height: "18px" }} />
        </button>
        {modalOpen && (
          <BurgerModal modalOpen={modalOpen} modalClose={onModalClose} />
        )}
        <div className={styles.logo_container}>
          <Image
            src="/logo.png"
            width={60}
            height={50}
            alt="logo"
            className={styles.logo}
          />

          <Link href="/">
            <a className={styles.logo_name}>
              <span className={styles.logo_color}>Sushi</span>Raketa
            </a>
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="/menu/rolls">
            <a className={styles.link}>
              <svg className={styles.svg}>
                <use href="/sprite.svg#sushi-roll"></use>
              </svg>
              Роли
            </a>
          </Link>
          <Link href="/menu/sets">
            <a className={styles.link}>
              <svg className={styles.svg}>
                <use href="/sprite.svg#sushi-set"></use>
              </svg>
              Сети
            </a>
          </Link>
          <Link href="/menu/pizza">
            <a className={styles.link}>
              <svg className={styles.svg}>
                <use href="/sprite.svg#pizza"></use>
              </svg>
              Піца
            </a>
          </Link>
          <Link href="/menu/burger">
            <a className={styles.link}>
              <svg className={styles.svg}>
                <use href="/sprite.svg#burger"></use>
              </svg>
              Бургери
            </a>
          </Link>
          <Link href="/menu/noodle">
            <a className={styles.link}>
              <svg className={styles.svg}>
                <use href="/sprite.svg#noodles"></use>
              </svg>
              Локшина
            </a>
          </Link>
        </div>
        <div className={styles.right_wrapper}>
          <div className={styles.cart_wrapper}>
            <Link href="/cart">
              <a className={styles.cart}>
                <BiShoppingBag />
              </a>
            </Link>
            {cartList.length > 0 ? <ItemsInCart /> : null}
          </div>
          <Link href="/login">
            <a className={styles.singin}>
              <CgProfile className={styles.singin_img} />
              Увійти
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
