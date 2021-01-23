import styles from './Button.module.scss'

const Button = ({className, onClick, text }) => {
  return (<a href="#" className={[styles.button, className].join(' ')} onClick={onClick}>{text}</a>);
}

export default Button;