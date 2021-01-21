import styles from './MainNav.module.scss'

const MainNav = () => {
  return (
    <nav className={styles.mainNavWrapper}>
      <ul className={styles.mainNav}>
        <li><a href="#">Sapatos</a></li>
        <li><a href="#">Bolsas</a></li>
        <li><a href="#">Acessórios</a></li>
        <li><a href="#">Off</a></li>
      </ul>
    </nav>
  );
}

export default MainNav;