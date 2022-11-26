import Layout from "../../layout/layout";
import styles from "./sass/Heading.module.scss";

const Heading = ({ text }) => {
  return (
    <Layout>
      <h2 className={styles.heading}>{text}</h2>
    </Layout>
  );
};

export default Heading;
