import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.logicGate}>
      <div className={styles.chartThumbnail}>
        <div className={styles.subtitle}>
          <img className={styles.divlogoIcon} alt="" src="/divlogo@2x.png" />
        </div>
        <div className={styles.connecter}>
          <div className={styles.divcartMenuWrap}>
            <div className={styles.linkHome}>Home</div>
            <div className={styles.linkAbout}>About Us</div>
            <div className={styles.divider}>
              <div className={styles.linkKey}>Key Initiatives</div>
              <div className={styles.sorter}>
                <img className={styles.linkIcon} alt="" src="/link.svg" />
              </div>
            </div>
            <div className={styles.divider1}>
              <div className={styles.linkOther}>Other Initiatives</div>
              <div className={styles.linkWrapper}>
                <img className={styles.linkIcon1} alt="" src="/link-1.svg" />
              </div>
            </div>
            <div className={styles.oIPBox}>
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

export default FrameComponent3;
