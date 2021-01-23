import styles from './Shopcart.module.scss'

import { useContext, useEffect, useState } from 'react'
import { DataContext } from 'contexts/context'

import Button from 'components/Button'
import CloseSVG from 'components/CloseSVG'
import Overlay from 'components/Overlay'
import numberFormat from 'helpers/numberFormat'
import { countItens, getTotal } from 'helpers/cartHelper'

const Shopcart = () => {
  const { state, dispatch } = useContext(DataContext)
  const [showModal, setShowModal] = useState(false)
  const [products, setProducts] = useState(null)
  const [cartItens, setCartItens] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const finishPurchase = (e) => {
    e.preventDefault()
  }

  const closeModal = (e) => {
    dispatch({ type: 'HIDE_CART_MODAL' })
    e.preventDefault()
  }

  const increase = (e, product) => {
    dispatch({ type: 'INCREASE_PRODUCT_QUANTITY', payload: product })
    e.preventDefault()
  }

  const decrease = (e, product) => {
    dispatch({ type: 'DECREASE_PRODUCT_QUANTITY', payload: product })
    e.preventDefault()
  }

  const remove = (e, product) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: product })
    e.preventDefault()
  }

  useEffect(() => {
    if (state.cart) {
      setShowModal(state.cartModal.visible)
      setProducts(state.cart)
      setCartItens(countItens(state.cart))
      setTotalPrice(getTotal(state.cart))
    }
  }, [state])

  return (
    showModal ? (
      <>
        <Overlay />
        <div className={styles.modalWrapper}>
          <div className={styles.modalContainer}>
            <a href="#" className={styles.closeButton} onClick={closeModal}><CloseSVG /></a>

            <div className={styles.titleWrapper}>
              <h3>Sacola</h3>
              <p>{cartItens} itens</p>
            </div>

            <div className={styles.productWrapper}>
              {
                products && products.map((v, i) => {
                  return (
                    <Product
                      key={`product-${i}`}
                      product={v}
                      increase={increase}
                      decrease={decrease}
                      remove={remove} />
                  )
                })
              }
            </div>

            <div className={styles.freeDeliveryMessage}>
              <span>Faltam R$ xx,xx para você <strong>Ganhar Frete Grátis</strong></span>
            </div>

            <div className={styles.purchaseInfoWrapper}>
              <div className={styles.purchasePrice}>
                <strong>Total: {numberFormat(totalPrice)}</strong><br />
                <span>até 3x de {numberFormat(totalPrice/3)} sem juros</span>
              </div>
              <Button className={styles.button} onClick={finishPurchase} text="Finalizar Compra" />
            </div>
          </div>
        </div>
      </>
    )
      :
      (
        <div />
      )
  );
}


const Product = ({ product, increase, decrease, remove }) => {

  return (
    <div className={styles.product}>
      <img src={product.data.fields.photos[0].fields.file.url} />
      <div className={styles.productInfo}>
        <span className={styles.productName}>{product.data.fields.name}</span>
        <strong className={styles.productPrice}>
          {
            product.data.fields.priceWithDiscount ?
              (
                <>
                  <strike className={styles.discount}>{numberFormat(product.data.fields.price)}</strike>
                  <span className={styles.price}>{numberFormat(product.data.fields.priceWithDiscount)}</span>
                </>
              )
              :
              (<span className={styles.price}>{numberFormat(product.data.fields.price)}</span>)
          }
        </strong>
      </div>
      <div className={styles.quantityHandler}>
        <a href="#" className={styles.decrease} onClick={(e) => decrease(e, product)} >
          <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.85156 3.14648H0.982422V0.597656H6.85156V3.14648Z" fill="#AEB6C1" />
          </svg>
        </a>
        <span>{product.quantity}</span>
        <a href="#" className={styles.increase} onClick={(e) => increase(e, product)}>
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51367 3.93359H9.84375V6.75586H6.51367V10.5742H3.4375V6.75586H0.0976562V3.93359H3.4375V0.222656H6.51367V3.93359Z" fill="#AEB6C1" />
          </svg>
        </a>
      </div>
      <div className={styles.removerWrapper}>
        <a href="#" className={styles.remove} onClick={(e) => remove(e, product)}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66732 1.27353L8.72732 0.333527L5.00065 4.06019L1.27398 0.333527L0.333984 1.27353L4.06065 5.00019L0.333984 8.72686L1.27398 9.66686L5.00065 5.94019L8.72732 9.66686L9.66732 8.72686L5.94065 5.00019L9.66732 1.27353Z" fill="#CCCCCC" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Shopcart