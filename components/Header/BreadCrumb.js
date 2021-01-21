import styles from './BreadCrumb.module.scss'

const BreadCrumb = () => {
  return (
    <div className={styles.breadCrumbWrapper}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#" className={styles.selected}>Sapatos</a></li>
      </ul>
    </div>
  );
}

export default BreadCrumb;