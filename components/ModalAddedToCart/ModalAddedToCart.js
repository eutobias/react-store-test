import styles from './ModalAddedToCart.module.scss'

import { useContext, useEffect, useState } from 'react'
import { DataContext } from 'contexts/context'

import Button from 'components/Button'
import CloseSVG from 'components/CloseSVG'
import Overlay from 'components/Overlay'

const ModalAddedToCart = () => {
  const { state, dispatch } = useContext(DataContext)
  const [showModal, setShowModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const finishPurchase = (e) => {    
    dispatch({ type: 'HIDE_ADD_TO_CART_MODAL' })
    dispatch({ type: 'SHOW_CART_MODAL' })
    e.preventDefault()
  }

  const closeModal = (e) => {
    dispatch({ type: 'HIDE_ADD_TO_CART_MODAL' })
    e.preventDefault()
  }

  useEffect(() => {
    setShowModal(state.addToCartModal.visible)
    if (state.addToCartModal.product)
      setImageUrl(state.addToCartModal.product.fields.photos[0].fields.file.url)
  }, [state])

  return (
    showModal ? (
      <>
        <Overlay />
        <div className={styles.modalWrapper}>
          <div className={styles.modalContainer}>
            <a href="#" className={styles.closeButton} onClick={closeModal}><CloseSVG /></a>
            <img src={imageUrl} />
            <p>Produto adicionado com sucesso!</p>
            <Button className={styles.button} onClick={finishPurchase} text="Finalizar Compra" />
            <a href='#' className={styles.link} onClick={closeModal}>Continuar comprando</a>
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

export default ModalAddedToCart