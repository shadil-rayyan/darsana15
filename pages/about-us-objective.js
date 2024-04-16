import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";
import styles from "./about-us-objective.module.css";

const AboutUsObjective = () => {
  const router = useRouter();

  const onDivelementorWidgetWrap3Click = useCallback(() => {
    router.push("/about-us-general-information");
  }, [router]);

  return (
    <div className={styles.aboutUsObjective}>
      <img
        className={styles.aboutUsObjectiveChild}
        alt=""
        src="/rectangle-221.svg"
      />
      <section className={styles.aboutUsWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
      </section>
      <section className={styles.frameParent}>
        <FrameComponent4
          image6IconWidth="unset"
          arrow1IconFlex="unset"
          arrow1IconWidth="1082px"
          propBackgroundImage="url('/image-16@2x.png')"
        />
        <div className={styles.headingWithParent}>
          <div className={styles.headingWith}>
            <div className={styles.sectionSection}>
              <button className={styles.divelementorWidgetWrap}>
                <div className={styles.heading2}>OUR STORY</div>
              </button>
              <button className={styles.divelementorWidgetWrap1}>
                <div className={styles.whatWeDo}>WHAT WE DO</div>
              </button>
              <button className={styles.divelementorWidgetWrap2}>
                <b className={styles.heading21}>OBJECTIVES</b>
              </button>
              <button
                className={styles.divelementorWidgetWrap3}
                onClick={onDivelementorWidgetWrap3Click}
              >
                <div className={styles.heading22}>GENERAL INFORMATION</div>
              </button>
              <div className={styles.divelementorWidgetWrapParent}>
                <button className={styles.divelementorWidgetWrap4}>
                  <div className={styles.heading23}>CHAPTERS</div>
                </button>
                <div className={styles.divelementorWidgetWrap5}>
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
        <div className={styles.underTheBannerOfDarsanaWeWrapper}>
          <div className={styles.underTheBanner}>
            Under the banner of Darsana we have undertaken many socially
            relevant initiatives in education, waste management, sustainable
            construction methods,
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsObjective;
