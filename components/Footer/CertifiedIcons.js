import styles from './CertifiedIcons.module.scss'

const CertifiedIcons = () => {
  return ( 
    <ul className={styles.certifiedIconsWrapper}>
      <li><img src="/vtex-pci-200.png"/></li>
      <li><img src="/selo-ebit.png"/></li>
    </ul>
   );
}
 
export default CertifiedIcons;