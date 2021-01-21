import styles from './AuthNav.module.scss'

const AuthNav = () => {
  return (
    <ul className={styles.authNav}>
      <li><a href="#">Entrar</a></li>
      <li><a href="#">Cadastre-se</a></li>
    </ul>
  );
}

export default AuthNav;