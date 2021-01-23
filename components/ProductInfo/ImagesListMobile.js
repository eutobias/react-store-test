import styles from './ImagesListMobile.module.scss'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ImagesListMobile = ({ photos }) => {

  return (
    <div className={styles.imagesListWrapper}>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination
      >
        {
          photos && photos.map((v, i) => {
            return (
              <SwiperSlide key={i}>
                <img className={styles.imageSlide} src={v.fields.file.url} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </div>
  );
}

export default ImagesListMobile;