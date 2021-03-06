import styles from './ProductInfoContainer.module.scss'


import { useMediaQuery } from 'helpers/useMediaQuery';
import numberFormat from 'helpers/numberFormat'
import Button from 'components/Button';
import ImagesListMobile from './ImagesListMobile';

const ProductInfoContainer = ({ state, selectSize, selectedSize, selectColor, selectedColor, addToCart }) => {
  const showMobile = useMediaQuery('(max-width: 1023px)')

  return (
    state.product && (
      <section className={styles.productInfoContainer}>
        <h2 className={styles.productName}>{state.product.fields.name}</h2>
        <span className={styles.productCode}>{state.product.fields.productCode}</span>

        {
          !showMobile &&
          (
            <>
              {
                state.product.fields.priceWithDiscount ?
                  <PriceWithDiscount state={state} /> :
                  <PriceWithoutDiscount state={state} />
              }

              {
                selectedColor && <SelectedColorWrapper state={state} selectedColor={selectedColor} selectColor={selectColor} />
              }

              {
                selectedSize && <SelectedSizeWrapper state={state} selectedSize={selectedSize} selectSize={selectSize} />

              }
              <Button className={styles.addToCartButton} onClick={addToCart} text="Adicionar à sacola" />
              <p className={styles.productDescription}>{state.product.fields.description}</p>
            </>
          )
        }

        {
          showMobile && (
            <>
              <ImagesListMobile photos={state.product.fields.photos} />

              {
                selectedColor && <SelectedColorWrapper state={state} selectedColor={selectedColor} selectColor={selectColor} />
              }

              {
                selectedSize && <SelectedSizeWrapper state={state} selectedSize={selectedSize} selectSize={selectSize} />

              }

              <div className={styles.priceAndButtonWrapper}>
                <div className={styles.priceAndButonContainer}>
                  {
                    state.product.fields.priceWithDiscount ?
                      <PriceWithDiscount state={state} /> :
                      <PriceWithoutDiscount state={state} />
                  }
                </div>

                <Button className={styles.addToCartButton} onClick={addToCart} text="Adicionar à sacola" />
              </div>

              <h5 className={styles.descriptionTitle}>Descrição</h5>
              <p className={styles.productDescription}>{state.product.fields.description}</p>
            </>
          )
        }
      </section>
    )

  );
}


const PriceWithDiscount = ({ state }) => {
  return (
    <>
      <div className={styles.priceWrapper}>
        <strike>{numberFormat(state.product.fields.price)}</strike>
        <strong>{numberFormat(state.product.fields.priceWithDiscount)}</strong>
      </div>
      <div className={styles.paymentPartsWrapper}>
        ou 6x de {numberFormat(state.product.fields.priceWithDiscount / 6)}
      </div>
    </>
  );
}

const PriceWithoutDiscount = ({ state }) => {
  return (
    <>
      <div className={styles.priceWrapper}>
        <strong>{numberFormat(state.product.fields.price)}</strong>
      </div>
      <div className={styles.paymentPartsWrapper}>
        ou 6x de {numberFormat(state.product.fields.price / 6)}
      </div>
    </>
  );
}

const SelectedColorWrapper = ({ state, selectColor, selectedColor }) => {
  return (
    <div className={styles.colorsWrapper}>
      <span className={styles.colorNameWrapper}>
        Cor: <em>{selectedColor.fields.name}</em>
      </span>
      <ul className={styles.colorList}>
        {state.product.fields.colors.map((v, i) => {
          let classes = selectedColor.fields.name === v.fields.name ? [styles.colorListItem, styles.colorListItem_selected].join(' ') : styles.colorListItem

          return (<li key={`colors-${i}`} onClick={() => selectColor(v)} className={classes} style={{ backgroundColor: v.fields.rgb }}>{v.fields.name}</li>)
        })}
      </ul>
    </div>
  );
}
const SelectedSizeWrapper = ({ state, selectSize, selectedSize }) => {
  return (
    <div className={styles.sizeWrapper}>
      <span className={styles.sizeNameWrapper}>
        <span>Tamanho <em>{selectedSize.fields.name}</em></span>
        <a href="#" className={styles.sizeGuideLink}>Guia de medidas</a>
      </span>
      <ul>
        {state.product.fields.sizes.map((v, i) => {

          let classes = selectedSize.fields.name === v.fields.name ? [styles.sizeListItem, styles.sizeListItem_selected].join(' ') : styles.sizeListItem
          return (<li key={`colors-${i}`} onClick={() => selectSize(v)} className={classes}>{v.fields.name}</li>)
        })}
      </ul>
    </div>
  )
}

export default ProductInfoContainer;
