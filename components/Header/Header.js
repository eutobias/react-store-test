import styles from './Header.module.scss'

import useReactSimpleMatchMedia from 'react-simple-matchmedia'

import AuthNav from './AuthNav';
import MainNav from './MainNav';
import Logo from './Logo';
import SearchForm from './SearchForm';
import CartItens from './CartItens';
import BreadCrumb from './BreadCrumb';

import { DataContext } from 'contexts/context'
import { useContext, useEffect, useState } from 'react';
import { countItens } from 'helpers/cartHelper';
import MobileNav from './MobileNav';
import { useMediaQuery } from 'helpers/useMediaQuery';

const Header = () => {
  const showMobile = useMediaQuery('(max-width: 1023px)')
  const { state, dispatch } = useContext(DataContext)
  const [cartItensCount, setCartItensCount] = useState(0)

  const showCart = (e) => {
    dispatch({ type: 'SHOW_CART_MODAL' })
    e.preventDefault()
  }

  useEffect(() => {
    if (state.cart) {
      setCartItensCount(countItens(state.cart))
    }
  }, [state])

  return (
    showMobile ? (
      <header className={styles.headerWrapper}>
        <MobileNav />
        <Logo />

        <SearchForm />
        <CartItens cartItensCount={cartItensCount} showCart={showCart} />
      </header>
    ) : (
        <header className={styles.headerWrapper}>
          <Logo />
          <div className={styles.navBorderWrapper}>
            <div className={styles.navWrapper}>
              <AuthNav />
              <MainNav />
              <SearchForm />
              <CartItens cartItensCount={cartItensCount} showCart={showCart} />
            </div>
          </div>
          <div className={styles.breadCrumbWrapper}>
            <BreadCrumb />
          </div>
        </header>
      )
  )
}

export default Header;