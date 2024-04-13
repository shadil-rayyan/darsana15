import FrameComponent17 from "../components/frame-component17";
import FrameComponent19 from "../components/frame-component19";
import FrameComponent18 from "../components/frame-component18";
import styles from "./about-us-present-leadership.module.css";

const AboutUsPresentLeadership = () => {
  return (
    <div className={styles.aboutUsPresentLeadership}>
      <img
        className={styles.aboutUsPresentLeadershipChild}
        alt=""
        src="/rectangle-22.svg"
      />
      <section className={styles.aboutUsWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
      </section>
      <section className={styles.frameParent}>
        <FrameComponent17 weAreAWidth="unset" weAreAAlignSelf="stretch" />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.image16Parent}>
              <img
                className={styles.image16Icon}
                alt=""
                src="/image-16@2x.png"
              />
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className={styles.arrow1Icon}
                loading="lazy"
                alt=""
                src="/arrow-1@2x.png"
              />
            </div>
            <img
              className={styles.arrow2Icon}
              loading="lazy"
              alt=""
              src="/arrow-2@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <FrameComponent19 />
          <FrameComponent18 />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPresentLeadership;
