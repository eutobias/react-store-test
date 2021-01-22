import styles from './SocialMediaIcons.module.scss'

const SocialMediaIcons = () => {
  return (
    <ul className={styles.socialMediaIcons}>
      <li><a href="#" className={styles.facebook} title="Facebook">Facebook</a></li>
      <li><a href="#" className={styles.instagram} title="Instagram">Instagram</a></li>
      <li><a href="#" className={styles.pinterest} title="Pinterest">Pinterest</a></li>
    </ul>
  );
}

export default SocialMediaIcons;