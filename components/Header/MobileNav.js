import CloseSVG from 'components/CloseSVG'
import MenuIconSVG from 'components/MenuIconSVG'
import { useState } from 'react'
import AuthNav from './AuthNav'
import MainNav from './MainNav'
import styles from './MobileNav.module.scss'

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const show = (e) => {
    setShowMenu(true)
    e.preventDefault()
  }

  const hide = (e) => {
    setShowMenu(false)
    e.preventDefault()
  }

  return (
    <div className={styles.mobileNavWrapper}>
      <p href="#" className={styles.menuButton} onClick={show}>
        <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.333984 12.0829V14.4163H23.6673V12.0829H0.333984ZM0.333984 6.24959V8.58292H23.6673V6.24959H0.333984ZM0.333984 0.41626V2.74959H23.6673V0.41626H0.333984Z" fill="#686868" />
        </svg>
      </p>

      {showMenu && (
        <div className={styles.mobileNavOpen}>
          <div className={styles.mobileNavContainer}>
            <a href="#" className={styles.closeButton} onClick={hide}>
              <CloseSVG />
            </a>
            <MainNav />
            <AuthNav />
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;