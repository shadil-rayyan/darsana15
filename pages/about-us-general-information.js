import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";
import styles from "./about-us-general-information.module.css";

const AboutUsGeneralInformation = () => {
  const router = useRouter();

  const onDivelementorWidgetWrap4Click = useCallback(() => {
    router.push("/about-us-chapters");
  }, [router]);

  return (
    <div className={styles.aboutUsGeneralInformation}>
      <img
        className={styles.aboutUsGeneralInformationChild}
        alt=""
        src="/rectangle-22.svg"
      />
      <section className={styles.aboutUsWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
      </section>
      <section className={styles.frameParent}>
        <FrameComponent4
          image6IconWidth="1130px"
          arrow1IconFlex="1"
          arrow1IconWidth="unset"
          propBackgroundImage="url('/image-16@2x.png')"
        />
        <div className={styles.heading2LinkOurStoryParent}>
          <b className={styles.heading2}>OUR STORY</b>
          <div className={styles.sectionSection}>
            <button className={styles.divelementorWidgetWrap}>
              <div className={styles.heading21}>OUR STORY</div>
            </button>
            <button className={styles.divelementorWidgetWrap1}>
              <div className={styles.whatWeDo}>WHAT WE DO</div>
            </button>
            <button className={styles.divelementorWidgetWrap2}>
              <div className={styles.heading22}>OBJECTIVES</div>
            </button>
            <button className={styles.divelementorWidgetWrap3}>
              <b className={styles.heading23}>GENERAL INFORMATION</b>
            </button>
            <div className={styles.divelementorWidgetWrapParent}>
              <button
                className={styles.divelementorWidgetWrap4}
                onClick={onDivelementorWidgetWrap4Click}
              >
                <div className={styles.heading24}>CHAPTERS</div>
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
                <div className={styles.heading25}>TIMELINE</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.image18Wrapper}>
              <img
                className={styles.image18Icon}
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
            </div>
            <div className={styles.darsanaIsA}>
              Darsana is a professionally managed organization led by a
              21-member Executive Committee. The committee members are from all
              over the globe. The Committee meets every two weeks via digital
              platforms to plan upcoming activities. We take pride in being
              among the first organizations to use digital platforms to run an
              organization effectively and efficiently.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsGeneralInformation;
