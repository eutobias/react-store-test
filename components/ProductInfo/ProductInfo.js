import styles from './ProductInfo.module.scss'

import { useContext, useEffect, useState } from 'react'
import { DataContext } from 'contexts/context'
import { useMediaQuery } from 'helpers/useMediaQuery';

import ProductMediaList from './ProductMediaList'
import ProductInfoContainer from './ProductInfoContainer'
import ProductSelectedImage from './ProductSelectedImage'

const ProductInfo = (props) => {
  const showMobile = useMediaQuery('(max-width: 1023px)')

  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)

  const { state, dispatch } = useContext(DataContext)

  useEffect(() => {

    if (state.product) {
      setSelectedImage(state.product.fields.photos[0])
      setSelectedColor(state.product.fields.colors[0])
      setSelectedSize(state.product.fields.sizes[0])
    }

  }, [state]);

  const selectVideo = (video) => {
    console.log(video)
  }
  const selectImage = (image) => {
    setSelectedImage(image)
  }
  const selectSize = (size) => {
    setSelectedSize(size)
  }
  const selectColor = (color) => {
    setSelectedColor(color)
  }

  const addToCart = (e) => {
    dispatch({ type: 'ADD_TO_CART' })
    dispatch({ type: 'SHOW_ADD_TO_CART_MODAL', payload: { product: state.product } })
    e.preventDefault()
  }

  return (
    <main className={styles.productInfoWrapper}>
      {
        !showMobile &&
        <ProductMediaList
          state={state}
          selectVideo={selectVideo}
          selectImage={selectImage} />
      }
      {
        !showMobile &&
        <ProductSelectedImage selectedImage={selectedImage} />
      }

      <ProductInfoContainer
        state={state}
        selectSize={selectSize}
        selectedSize={selectedSize}
        selectColor={selectColor}
        selectedColor={selectedColor}
        addToCart={addToCart} />
    </main>
  );
}

export default ProductInfo;