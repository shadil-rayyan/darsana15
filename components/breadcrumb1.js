import styles from "./breadcrumb1.module.css";

const Breadcrumb1 = () => {
  return (
    <header className={styles.breadcrumb}>
      <div className={styles.breadcrumb1}>
        <div className={styles.backgroundParent}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/-background.svg"
          />
          <div className={styles.bellRossNightlumParent}>
            <div className={styles.bellRoss}>ALL</div>
            <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
            <div className={styles.bellRoss1}>ALL</div>
            <div className={styles.backgroundGroup}>
              <img
                className={styles.backgroundIcon1}
                alt=""
                src="/-background.svg"
              />
              <img className={styles.frameItem} alt="" src="/polygon-1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.backgroundContainer}>
          <img
            className={styles.backgroundIcon2}
            alt=""
            src="/-background-1.svg"
          />
          <div className={styles.bellRossNightlumGroup}>
            <div className={styles.bellRoss2}>Search</div>
            <div className={styles.frameParent}>
              <div className={styles.image41Parent}>
                <img
                  className={styles.image41Icon}
                  alt=""
                  src="/image-41@2x.png"
                />
                <img
                  className={styles.image41Icon1}
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <img
                className={styles.backgroundIcon3}
                alt=""
                src="/-background-1.svg"
              />
            </div>
            <div className={styles.bellRoss3}>Search</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Breadcrumb1;
