import styles from './Logo.module.scss'
import LogoSVG from '../LogoSVG'

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <h1 className={styles.logo}>
        <span>Original.io</span>
        <LogoSVG />
      </h1>
    </div>
  );
}

export default Logo;