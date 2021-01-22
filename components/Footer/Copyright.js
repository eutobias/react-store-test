import LogoSVG from 'components/LogoSVG'
import styles from './Copyright.module.scss'

const Copyright = () => {
  return (
    <div className={styles.copyrightWrapper}>
      <div className={styles.copyrightContainer}>
        <p>
          Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.<br />
        Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100<br />
        CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
      </p>
        <LogoSVG className={styles.logoFooter} />
      </div>
    </div>
  );
}

export default Copyright;