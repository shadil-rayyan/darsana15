import Property1Default from "./property1-default";
import styles from "./group-component.module.css";

const GroupComponent = () => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.wrapperDivlogoWrapper}>
        <div className={styles.wrapperDivlogo}>
          <img
            className={styles.divlogoIcon}
            loading="lazy"
            alt=""
            src="/divlogo2@2x.png"
          />
        </div>
      </div>
      <div className={styles.menuheaderWrapper}>
        <Property1Default
          about="Contact us"
          features="About us"
          pricing="Initiatives"
          gallery="Chapters"
          team="Eye magazine"
          property1DefaultAlignSelf="stretch"
          property1DefaultGap="40px"
          property1DefaultWidth="unset"
          aboutMinWidth="77px"
          featuresMinWidth="64px"
          pricingMinWidth="69px"
          galleryMinWidth="65px"
          teamMinWidth="99px"
        />
      </div>
      <div className={styles.socialIcons}>
        <div className={styles.socialRow}>
          <img
            className={styles.socialIcon}
            loading="lazy"
            alt=""
            src="/social1.svg"
          />
        </div>
        <div className={styles.socialRow1}>
          <img
            className={styles.socialIcon1}
            loading="lazy"
            alt=""
            src="/social-1@2x.png"
          />
        </div>
        <img
          className={styles.socialIcon2}
          loading="lazy"
          alt=""
          src="/social-2.svg"
        />
        <div className={styles.socialRow2}>
          <img
            className={styles.socialIcon3}
            loading="lazy"
            alt=""
            src="/social-3@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
