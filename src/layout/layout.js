import styles from "./sass/layout.module.scss";
const Layout = ({ children }) => (
  <>
    <section className={styles.section}>{children}</section>
  </>
);

export default Layout;
