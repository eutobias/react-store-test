import styles from './ProductRecomendations.module.scss'

import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { useMediaQuery } from 'helpers/useMediaQuery';
import { DataContext } from 'contexts/context'
import { useContext, useEffect, useState } from 'react'
import numberFormat from 'helpers/numberFormat'
import ArrowSVG from 'components/ArrowSVG';

const ProductRecomendations = () => {
  const showMobile = useMediaQuery('(max-width: 1023px)')

  const { state } = useContext(DataContext)
  const [products, setProducts] = useState(null)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    if (state.products) {
      setProducts(state.products)
    }
  }, [state])

  const setupPagination = (e) => {
    if (!e)
      return

    const itensPerPage = e.originalParams.slidesPerView
    const totalItens = e.slides.length
    const currentIndex = e.activeIndex 
    const pagesCount = totalItens / itensPerPage
    const currentPage = (currentIndex / itensPerPage) + 1

    setPagination({ current: currentPage, count: pagesCount })
  }

  return (
    <section className={styles.productRecomendationsWrapper}>
      <h3>Quem viu, viu também</h3>
      {
        products && showMobile && (
          <Swiper
            spaceBetween={15}
            slidesPerView={2}
            slidesPerGroup={2}
            onSlideChange={(e) => {
              setupPagination(e)
            }}
            onSwiper={(e) => {
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
        )
      }
      {
        products && !showMobile && (
          <Swiper
            spaceBetween={15}
            slidesPerView={4}
            slidesPerGroup={4}
            onSlideChange={(e) => {
              setupPagination(e)
            }}
            onSwiper={(e) => {
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
        )
      }

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
  const showMobile = useMediaQuery('(max-width: 1023px)')

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
            {!showMobile && (
              <ul className={styles.colorWrapper}>
                {
                  data.fields.colors.map((v, i) => {
                    return (<li key={`color-${i}`} style={{ backgroundColor: v.fields.rgb }}>{v.fields.name}</li>)
                  })
                }
              </ul>
            )}

            {showMobile && (
              data.fields.priceWithDiscount ?
                <span className={styles.parcialPayment}>ou 6x de {numberFormat(data.fields.priceWithDiscount / 6)}</span>
                :
                <span className={styles.parcialPayment}>ou 6x de {numberFormat(data.fields.price / 6)}</span>
            )}
          </div>
        </section>
      </a>
    </Link >
  )
}

export default ProductRecomendations;