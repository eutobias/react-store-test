import styles from './ProductRecomendations.module.scss'

import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { DataContext } from 'contexts/context'
import { useContext, useEffect, useState } from 'react'
import numberFormat from 'helpers/numberFormat'
import ArrowSVG from 'components/ArrowSVG';

const ProductRecomendations = () => {
  const { state } = useContext(DataContext)
  const [products, setProducts] = useState(null)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    if (state.products) {
      setProducts(state.products)
    }
  }, [state])

  useEffect(() => {
    if (products)
      setupPagination()
  }, [products])

  const setupPagination = (e) => {
    if (!e) {
      setPagination({ current: 1, count: Math.ceil(products.items.length / 4) })
      return
    }

    const pages = Math.ceil(e.slides.length / 4)
    const page = Math.ceil((e.activeIndex + 1) / 4)

    setPagination({ current: page, count: pages })
  }

  return (
    <section className={styles.productRecomendationsWrapper}>
      <h3>Quem viu, viu também</h3>
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        slidesPerGroup={4}
        onSlideChange={(e) => {
          setupPagination(e)
        }}
        navigation={{
          prevEl: `.${styles.prev}`,
          nextEl: `.${styles.next}`
        }}
      >
        {
          products && products.items.map((v, i) => {
            return (
              <SwiperSlide key={i}>
                <RecomendationSlide data={v} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <div className={styles.slidesPagination}>
        <div className={styles.prev}>
          <ArrowSVG />
        </div>
        <div className={styles.numbers}>
          {
            pagination && (
              `${pagination.current} de ${pagination.count}`
            )
          }
        </div>
        <div className={styles.next}>
          <ArrowSVG />
        </div>
      </div>
    </section>
  );
}

const RecomendationSlide = ({ data }) => {
  return (
    <Link href={`/${data.sys.id}`}>
      <a>
        <section className={styles.slideWrapper}>
          <img src={data.fields.photos[0].fields.file.url} alt={data.fields.name} />
          <div className={styles.dataWrapper}>
            {
              data.fields.priceWithDiscount ?
                (
                  <span className={styles.priceWrapper}>
                    <strike>{numberFormat(data.fields.price)}</strike>
                    <strong>{numberFormat(data.fields.priceWithDiscount)}</strong>
                  </span>
                ) :
                (
                  <span className={styles.priceWrapper}>
                    <strong>{numberFormat(data.fields.price)}</strong>
                  </span>
                )
            }
            <ul className={styles.colorWrapper}>
              {
                data.fields.colors.map((v, i) => {
                  return (<li key={`color-${i}`} style={{ backgroundColor: v.fields.rgb }}>{v.fields.name}</li>)
                })
              }
            </ul>
          </div>
        </section>
      </a>
    </Link>
  )
}

export default ProductRecomendations;