import styles from "./breadcrumb.module.css";

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.bellRossNightlumParent}>
        <div className={styles.bellRoss}>ALL</div>
        <div className={styles.outerBackground}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/-background.svg"
          />
          <img
            className={styles.outerBackgroundChild}
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
      <div className={styles.productImage}>
        <div className={styles.backgroundParent}>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/-background-1.svg"
          />
          <img
            className={styles.image41Icon}
            loading="lazy"
            alt=""
            src="/image-41@2x.png"
          />
        </div>
        <div className={styles.bellRoss1}>Search</div>
      </div>
    </div>
  );
};

export default Breadcrumb;
