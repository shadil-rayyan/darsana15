import styles from "./main-container.module.css";

const MainContainer = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.innerContentParent}>
        <div className={styles.innerContent}>
          <img className={styles.divlogoIcon} alt="" src="/divlogo@2x.png" />
        </div>
        <div className={styles.navigationArea}>
          <div className={styles.divcartMenuWrap}>
            <div className={styles.linkHome}>Home</div>
            <div className={styles.linkAbout}>About Us</div>
            <div className={styles.mainNavigation}>
              <div className={styles.linkKey}>Key Initiatives</div>
              <div className={styles.moreOptions}>
                <img className={styles.linkIcon} alt="" src="/link.svg" />
              </div>
            </div>
            <div className={styles.mainNavigation1}>
              <div className={styles.linkOther}>Other Initiatives</div>
              <div className={styles.linkWrapper}>
                <img className={styles.linkIcon1} alt="" src="/link-1.svg" />
              </div>
            </div>
            <div className={styles.chapters}>
              <div className={styles.linkChapters}>{`Product `}</div>
            </div>
            <div className={styles.link} />
            <div className={styles.linkEye}>Actvities</div>
            <div className={styles.linkContact}>Contact Us</div>
          </div>
        </div>
        <div className={styles.link1}>
          <b className={styles.signIn}>Sign In</b>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
