import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./why-trust-us-link.module.css";

const WhyTrustUsLink = () => {
  const router = useRouter();

  const onDivelementorWidgetWrapContainerClick = useCallback(() => {
    router.push("/about-us-present-leadership");
  }, [router]);

  return (
    <div className={styles.whyTrustUsLink}>
      <div className={styles.howWeWorkLink}>
        <div className={styles.sectionSectionWrapper}>
          <div className={styles.sectionSection}>
            <button className={styles.divelementorWidgetWrap}>
              <div className={styles.heading2}>OUR STORY</div>
            </button>
            <button className={styles.divelementorWidgetWrap1}>
              <div className={styles.whatWeDo}>WHAT WE DO</div>
            </button>
            <button className={styles.divelementorWidgetWrap2}>
              <div className={styles.heading21}>OBJECTIVES</div>
            </button>
            <button className={styles.divelementorWidgetWrap3}>
              <div className={styles.heading22}>GENERAL INFORMATION</div>
            </button>
            <div className={styles.divelementorWidgetWrapParent}>
              <button className={styles.divelementorWidgetWrap4}>
                <b className={styles.heading23}>CHAPTERS</b>
              </button>
              <div
                className={styles.divelementorWidgetWrap5}
                onClick={onDivelementorWidgetWrapContainerClick}
              >
                <div className={styles.heading2Container}>
                  <span className={styles.heading2Container1}>
                    <p className={styles.present}>PRESENT</p>
                    <p className={styles.leadership}>LEADERSHIP</p>
                  </span>
                </div>
              </div>
              <button className={styles.divelementorWidgetWrap6}>
                <div className={styles.heading24}>TIMELINE</div>
              </button>
            </div>
          </div>
        </div>
        <b className={styles.heading25}>OUR STORY</b>
      </div>
    </div>
  );
};

export default WhyTrustUsLink;
