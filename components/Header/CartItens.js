import styles from './CartItens.module.scss'

const CartItens = ({cartItensCount, showCart}) => {
  return (
    <section className={styles.cartItens}>
      <a href="#" onClick={showCart}>
        <span className={styles.cartIcon}>Itens no carrinho</span>
        <span>{cartItensCount}</span>
      </a>
    </section>
  );
}

export default CartItens;