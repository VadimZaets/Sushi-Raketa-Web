import styles from "./sass/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../layout/layout";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.mobile_container}>
          <div className={styles.wrapp}>
            <h2 className={styles.title}>Графік роботи</h2>
            <ul className={styles.mobile_list}>
              <li className={styles.mobile_item}>
                <address className={styles.address}>м.Андрушівка</address>
                <p className={styles.work_time}>Щоденно 11:00 - 20:00</p>
                <a href="tel:+380689843908" className={styles.tel}>
                  +38(068)-984-3908
                </a>
              </li>
              <li className={styles.mobile_item}>
                <address className={styles.address}>м.Чуднів</address>
                <p className={styles.work_time}>Щоденно 11:00 - 20:30</p>
                <a href="tel:+380689843908" className={styles.tel}>
                  +38(068)-984-3908
                </a>
              </li>
              <li className={styles.mobile_item}>
                <address className={styles.address}>м.Черняхів</address>
                <p className={styles.work_time}>Щоденно 10:30 - 20:30</p>
                <a href="tel:+380689843908" className={styles.tel}>
                  +38(068)-984-3908
                </a>
              </li>
            </ul>
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
        <div className={styles.container}>
          <div className={styles.wrapp}>
            <div className={styles.logo_container}>
              <Image
                src="/logo.png"
                width={50}
                height={40}
                alt="logo"
                className={styles.logo}
              />

              <Link href="/">
                <a className={styles.logo_name}>
                  <span className={styles.logo_color}>Sushi</span>Raketa
                </a>
              </Link>
            </div>
            <ul>
              <li className={styles.address_item}>
                <address className={styles.address}>м.Андрушівка</address>
              </li>
              <li className={styles.address_item}>
                <address className={styles.address}>м.Чуднів</address>
              </li>
              <li className={styles.address_item}>
                <address className={styles.address}>м.Черняхів</address>
              </li>
            </ul>
          </div>
          <div className={styles.wrapp}>
            <h2 className={styles.title}>Графік роботи</h2>
            <p className={styles.work_time}>Щоденно 11:00 - 20:00</p>
            <p className={styles.work_time}>Щоденно 11:00 - 20:30</p>
            <p className={styles.work_time}>Щоденно 10:30 - 20:30</p>
          </div>
          <div className={styles.wrapp}>
            <h2 className={styles.title}>Номер телефону</h2>
            <a href="tel:+380689843908" className={styles.tel}>
              +38(068)-984-3908
            </a>
            <a href="tel:+380689843908" className={styles.tel}>
              +38(068)-984-3908
            </a>
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
        <div>
          <ul className={styles.links}>
            <li className={styles.links_item}>
              <Link href="/offer">
                <a className={styles.link}>Договір публічної оферти</a>
              </Link>
            </li>
            <li>
              <Link href="/offer">
                <a className={styles.link}>Доставка</a>
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
