import styles from './ProductMediaList.module.scss'

/* 
Eu sei que dava pra descontruir o objeto com ... 
mas assim o código se auto documenta. 
*/
const ProductMediaList = ({ state, selectVideo, selectImage }) => {
  return (
    <aside className={styles.productMediaList}>
      <MediaTypeVideo state={state} selectVideo={selectVideo} />
      <MediaTypeImage state={state} selectImage={selectImage} />
    </aside>
  );
}

const MediaTypeVideo = ({ state, selectVideo }) => {
  return (
    state.product && state.product.fields.videos && (
      <section className={styles.videoWrapper}>
        <h4>Vídeo</h4>
        <div className={styles.videoPlaceHolder}>
          <img onClick={() => selectVideo(state.product.fields.videos.fields.video.fields.file.url)} data-video={state.product.fields.videos.fields.video.fields.file.url} src={state.product.fields.videos.fields.placeholder.fields.file.url} title={state.product.fields.videos.fields.placeholder.fields.title} />
        </div>
      </section>
    )
  )
}

const MediaTypeImage = ({ state, selectImage }) => {
  return (
    state.product && state.product.fields.photos &&
    (
      <section className={styles.imagesListWrapper}>
        <h4>Fotos do produto</h4>
        <ul>
          <li className={[styles.arrow, styles.arrowUp, styles.disable].join(' ')}>Scrollar para Cima</li>
          {
            state.product.fields.photos.map((v, i) => {
              return (<li key={i} onClick={()=>{selectImage(v)}} className={styles.imageWrapper}><img src={v.fields.file.url} title={v.fields.file.title} /></li>)
            })
          }          
          <li className={[styles.arrow, styles.arrowDown, styles.disable].join(' ')}>Scrollar para Cima</li>
        </ul>
      </section>
    )
  )
}

export default ProductMediaList;