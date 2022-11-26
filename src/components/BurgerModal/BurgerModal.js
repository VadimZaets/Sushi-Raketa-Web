import React, { Children, useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BiArrowBack } from "react-icons/bi";
import styles from "./sass/BurgerModal.module.scss";
import { CgProfile } from "react-icons/cg";

export default function BurgerModal({ modalOpen, modalClose }) {
  const [open, setOpen] = React.useState(false);
  const navigation = [
    { id: 1, title: "Роли", path: "/menu/rolls" },
    { id: 2, title: "Сети", path: "/menu/sets" },
    { id: 3, title: "Піца", path: "/menu/pizza" },
    { id: 4, title: "Бургери", path: "/menu/burger" },
  ];
  const handleClose = () => {
    setOpen(false);
    modalClose(false);
  };

  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <button onClick={handleClose} className={styles.closeBtn}>
            <BiArrowBack style={{ width: "18px", height: "18px" }} />
          </button>
          <div className={styles.burger_links}>
            <Link href="/menu/rolls">
              <a className={styles.burger_link} onClick={handleClose}>
                <svg className={styles.svg}>
                  <use href="/sprite.svg#sushi-roll"></use>
                </svg>
                Роли
              </a>
            </Link>
            <Link href="/menu/sets">
              <a className={styles.burger_link} onClick={handleClose}>
                <svg className={styles.svg}>
                  <use href="/sprite.svg#sushi-set"></use>
                </svg>
                Сети
              </a>
            </Link>
            <Link href="/menu/pizza">
              <a className={styles.burger_link} onClick={handleClose}>
                <svg className={styles.svg}>
                  <use href="/sprite.svg#pizza"></use>
                </svg>
                Піца
              </a>
            </Link>
            <Link href="/menu/burger">
              <a className={styles.burger_link} onClick={handleClose}>
                <svg className={styles.svg}>
                  <use href="/sprite.svg#burger"></use>
                </svg>
                Бургери
              </a>
            </Link>
            <Link href="/menu/noodle">
              <a className={styles.burger_link} onClick={handleClose}>
                <svg className={styles.svg}>
                  <use href="/sprite.svg#noodles"></use>
                </svg>
                Локшина
              </a>
            </Link>

            <Link href="/login">
              <a className={styles.singin} onClick={handleClose}>
                <CgProfile
                  width={12}
                  height={12}
                  className={styles.singin_img}
                />
                Увійти
              </a>
            </Link>
            <div className={styles.wrapp}>
              <h2 className={styles.title}>Графік роботи</h2>
              <address className={styles.town}>м.Андрушівка</address>
              <p className={styles.work_time}>Щоденно 11:00 - 20:00</p>
              <a href="tel:+380689843908" className={styles.tel}>
                +38(068)-984-3908
              </a>

              <address className={styles.town}>м.Чуднів</address>
              <p className={styles.work_time}>Щоденно 11:00 - 20:30</p>
              <a href="tel:+380689843908" className={styles.tel}>
                +38(068)-984-3908
              </a>

              <address className={styles.town}>м.Черняхів</address>
              <p className={styles.work_time}>Щоденно 10:30 - 20:30</p>
              <a href="tel:+380689843908" className={styles.tel}>
                +38(068)-984-3908
              </a>
            </div>
            <div className={styles.wrapp}>
              <h2 className={styles.title}>Соціальні мережі</h2>
              <ul className={styles.social}>
                <li className={styles.social_item}>
                  <a href="#" className={styles.social_link}>
                    <svg className={styles.social_icon}>
                      <use href="/sprite.svg#instagram"></use>
                    </svg>
                  </a>
                </li>

                <li className={styles.social_item}>
                  <a href="#" className={styles.social_link}>
                    <svg className={styles.social_icon}>
                      <use href="/sprite.svg#facebook"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
