import styles from './FooterNavigation.module.scss'

const FooterNavigation = () => {
  return (
    <nav className={styles.footerNavigationWrapper}>
      <ul>
        <li className={styles.title}>Institucional</li>
        <li>
          <ul>
            <li><a href="#">A Marca</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Lojas</a></li>
          </ul>
        </li>
      </ul>
      <ul>
        <li className={styles.title}>Informações</li>
        <li>
          <ul>
            <li><a href="#">Formas de Pagamento</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
            <li><a href="#">Cuidados Com o Produto</a></li>
          </ul>
        </li>
      </ul>
      <ul>
        <li className={styles.title}>Conheça</li>
        <li>
          <ul>
            <li><a href="#">Franquias e Multimarcas</a></li>
            <li><a href="#">Trabalhe com a Gente</a></li>
            <li><a href="#">Procon-RJ</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNavigation;