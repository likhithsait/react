import styles from "./Portfolio.module.css";

export const Portfolio = () => {
  return (
    <div className={styles.container}>

      <div className={styles.titlesection}>
        <h1 className={styles.Name}>T. Likhith Sai</h1>
        <p>
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className={styles.startbutton}>Let's Get Started</button>
      </div>

      <div className={styles.imageBlock}>
        <img
          src="https://placehold.co/300x300"
          className={styles.heroImage}
        />
      </div>

    </div>
  );
};
