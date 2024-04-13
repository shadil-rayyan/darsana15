import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import styles from "./about-us-what-we-do.module.css";

const AboutUsWhatWeDo = () => {
  return (
    <div className={styles.aboutUsWhatWeDo}>
      <img
        className={styles.aboutUsWhatWeDoChild}
        alt=""
        src="/rectangle-22.svg"
      />
      <section className={styles.aboutUsWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
      </section>
      <section className={styles.frameParent}>
        <FrameComponent6 />
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
        <FrameComponent5 />
      </section>
    </div>
  );
};

export default AboutUsWhatWeDo;
