import styles from '../styles/ProdutoItem.module.css';

export default function ProdutoItem() {
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Café Especial 250g
        </h2>

        <p className={styles.description}>
          Café 100% arábica, torra média, com notas de chocolate e caramelo. Ideal para métodos filtrados e espresso.
        </p>

        <span className={styles.price}>
          R$ 29,90
        </span>
      </div>

      <div className={styles.card}>
        <h2 className={styles.title}>
          Cappuccino Cremoso 200g
        </h2>

        <p className={styles.description}>
          Mistura equilibrada de café, leite e chocolate, perfeita para um preparo rápido e saboroso.
        </p>

        <span className={styles.price}>
          R$ 19,90
        </span>
      </div>

      <div className={styles.card}>
        <h2 className={styles.title}>
          Caneca Personalizada Café
        </h2>

        <p className={styles.description}>
          Caneca de porcelana com estampa temática de cafeteria, resistente ao micro-ondas e lava-louças.
        </p>

        <span className={styles.price}>
          R$ 24,90
        </span>
      </div>
    </>
  );
}