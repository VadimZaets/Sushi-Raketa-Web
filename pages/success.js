import { useEffect } from "react";

import Head from "next/head";
import Heading from "../src/components/Heading/Heading";
import styles from "../src/utils/sass/404.module.scss";

const Success = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Ваше замовлення прийнято</title>
      </Head>
      <div>
        <img src="/logo.png" alt="logo" width={100} height={100} />
        <h2>Ваше замовлення прийнято</h2>
        <p>Наші адміністратори звяжуться з вами</p>
      </div>
    </div>
  );
};

export default Success;
