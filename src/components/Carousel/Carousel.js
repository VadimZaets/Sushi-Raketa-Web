import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./sass/Carousel.module.scss";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Layout from "../../layout/layout";

const images = [
  { id: 1, src: "testreklama.png", alt: "philadelphia" },
  { id: 2, src: "dragon.png", alt: "dragon" },
];

export default function Carousel() {
  return (
    <Layout>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        {images.map(({ id, src }) => (
          <SwiperSlide key={id} className={styles.swiper_slide}>
            <img src={src} alt="" className={styles.image} />
            <a href="" className={styles.link}>
              Замовити
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
}
