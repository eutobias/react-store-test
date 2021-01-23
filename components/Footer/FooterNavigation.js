import { useState } from 'react';
import styles from './FooterNavigation.module.scss'

const FooterNavigation = () => {
  const [institucionalOpen, setInstitucionalOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [conhecaOpen, setConhecaOpen] = useState(false)



  return (
    <nav className={styles.footerNavigationWrapper}>
      <ul className={institucionalOpen ? styles.open : styles.close}>
        <li className={styles.title} onClick={() => setInstitucionalOpen(!institucionalOpen)}>Institucional</li>
        <li>
          <ul>
            <li><a href="#">A Marca</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Lojas</a></li>
          </ul>
        </li>
      </ul>
      <ul className={infoOpen ? styles.open : styles.close}>
        <li className={styles.title} onClick={() => setInfoOpen(!infoOpen)}>Informações</li>
        <li>
          <ul>
            <li><a href="#">Formas de Pagamento</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
            <li><a href="#">Cuidados Com o Produto</a></li>
          </ul>
        </li>
      </ul>
      <ul className={conhecaOpen ? styles.open : styles.close}>
        <li className={styles.title} onClick={() => setConhecaOpen(!conhecaOpen)}>Conheça</li>
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