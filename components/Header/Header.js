import styles from './Header.module.scss'

import AuthNav from './AuthNav';
import MainNav from './MainNav';
import Logo from './Logo';
import SearchForm from './SearchForm';
import CartItens from './CartItens';
import BreadCrumb from './BreadCrumb';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Logo />
      <div className={styles.navWrapper}>
        <AuthNav />
        <MainNav />
        <SearchForm />
        <CartItens />        
      </div>
      <BreadCrumb />
    </header>
  );
}
 
export default Header;