import styles from './ProductSelectedImage.module.scss'

/*
  Esse aqui eu nem ia separar, mas deu aquele tic 
  nervoso de olhar o condigo entre dois components e ver 
  esse "if" com 1 tag pertido lá
*/
const ProductSelectedImage = ({ selectedImage }) => {
  return (
    selectedImage && <img src={selectedImage.fields.file.url} className={styles.productSelectedImage} />
  );
}

export default ProductSelectedImage;