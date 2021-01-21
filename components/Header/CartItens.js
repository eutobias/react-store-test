import styles from './CartItens.module.scss'

const CartItens = () => {
  return (
    <section className={styles.cartItens}>
      <a href="#">
        <span className={styles.cartIcon}>Itens no carrinho</span>
        <span>0</span>
      </a>
    </section>
  );
}

export default CartItens;