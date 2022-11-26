import Head from "next/head";
import Header from "../src/components/Header/Header";
import "../src/pages/App/sass/globals.scss";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "../src/redux/store";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";
import Footer from "../src/components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            <Component key={router.asPath} {...pageProps} />
            <Footer />
            <ScrollToTop />
          </PersistGate>
        </Provider>
      </main>
    </>
  );
}

export default MyApp;
