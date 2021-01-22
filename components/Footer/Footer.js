import styles from './Footer.module.scss'

import SocialMediaIcons from './SocialMediaIcons'
import NewsletterWrapper from './NewsletterWrapper'
import CertifiedIcons from './CertifiedIcons'
import FooterNavigation from './FooterNavigation'
import Copyright from './Copyright'

const Footer = () => {

  const submitNewsletter = (fields) => {
    console.log('submitNewsletter', fields)
  }

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <FooterNavigation />
        <SocialMediaIcons />
        <CertifiedIcons />
        <NewsletterWrapper submitNewsletter={submitNewsletter} />
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;