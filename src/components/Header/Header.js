import Layout from "../../layout/layout";
import Navbar from "../Navbar/Navbar";
import styles from "../Header/sass/Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <Layout>
        <Navbar />
      </Layout>
    </header>
  );
};

export default Header;
