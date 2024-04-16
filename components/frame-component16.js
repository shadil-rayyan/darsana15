import styles from "./frame-component16.module.css";

const FrameComponent16 = () => {
  return (
    <header className={styles.divlogoParent}>
      <img className={styles.divlogoIcon} alt="" src="/divlogo3@2x.png" />
      <nav className={styles.divcartMenuWrap}>
        <div className={styles.cartMenuWrap}>
          <div className={styles.linkHome}>Home</div>
        </div>
        <div className={styles.cartMenuWrap1}>
          <div className={styles.linkAbout}>About Us</div>
        </div>
        <div className={styles.cartMenuWrap2}>
          <div className={styles.linkKeyInitiativesParent}>
            <div className={styles.linkKey}>Key Initiatives</div>
            <div className={styles.linkWrapper}>
              <img className={styles.linkIcon} alt="" src="/link.svg" />
            </div>
          </div>
        </div>
        <div className={styles.cartMenuWrap3}>
          <div className={styles.linkOtherInitiativesParent}>
            <div className={styles.linkOther}>Other Initiatives</div>
            <div className={styles.linkContainer}>
              <img className={styles.linkIcon1} alt="" src="/link-1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.cartMenuWrap4}>
          <div className={styles.linkChaptersParent}>
            <div className={styles.linkChapters}>{`Product `}</div>
            <div className={styles.linkFrame}>
              <img className={styles.linkIcon2} alt="" src="/link-2.svg" />
            </div>
          </div>
        </div>
        <div className={styles.divcartMenuWrapInner}>
          <div className={styles.linkEyeMagazineParent}>
            <div className={styles.linkEye}>Actvities</div>
            <div className={styles.linkEye1}>Actvities</div>
          </div>
        </div>
        <div className={styles.cartMenuWrap5}>
          <div className={styles.linkContact}>Contact Us</div>
        </div>
        <div className={styles.sliderDots}>
          <div className={styles.signIn}>Sign In</div>
        </div>
      </nav>
    </header>
  );
};

export default FrameComponent16;
