import styles from "./content1.module.css";

const Content1 = ({ iconEmail, heading, link }) => {
  return (
    <div className={styles.content}>
      <img className={styles.iconEmail} loading="lazy" alt="" src={iconEmail} />
      <div className={styles.contactInfo}>
        <div className={styles.content1}>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </div>
        </div>
        <div className={styles.link}>{link}</div>
      </div>
    </div>
  );
};

export default Content1;
