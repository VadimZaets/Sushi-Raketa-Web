import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "../src/components/Heading/Heading";
import styles from "../src/utils/sass/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>404</title>
      </Head>
      <div>
        <img src="/logo.png" alt="logo" width={100} height={100} />
        <h2>Щось пішло не так... </h2>
      </div>
    </div>
  );
};

export default Error;
