import styles from "./01.module.sass";
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.item1}`}>1</div>
      <div className={`${styles.item} ${styles.item2}`}>2</div>
      <div className={`${styles.item} ${styles.item3}`}>3</div>
    </div>
  );
};
export default Page;
