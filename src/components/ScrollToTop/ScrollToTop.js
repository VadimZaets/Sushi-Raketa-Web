import { useEffect } from "react";
import styles from "./sass/ScrollToTop.module.scss";
import { AiOutlineRocket } from "react-icons/ai";
const ScrollToTop = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <button
      className={styles.scrollBtn}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <AiOutlineRocket className={styles.icon} />
    </button>
  );
};
export default ScrollToTop;
