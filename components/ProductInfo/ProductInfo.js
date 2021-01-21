import styles from './ProductInfo.module.scss'

import { useContext, useEffect, useState } from 'react'
import { DataContext } from 'contexts/context'

import ProductMediaList from './ProductMediaList'
import ProductInfoContainer from './ProductInfoContainer'
import ProductSelectedImage from './ProductSelectedImage'

const ProductInfo = (props) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)

  const { state } = useContext(DataContext)

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

  const addToCart= () => {
    console.log('addToCart')
  }

  return (
    <main className={styles.productInfoWrapper}>
      <ProductMediaList
        state={state}
        selectVideo={selectVideo}
        selectImage={selectImage} />

      <ProductSelectedImage selectedImage={selectedImage} />

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