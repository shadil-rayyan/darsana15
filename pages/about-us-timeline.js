import { useCallback } from "react";
import FrameComponent17 from "../components/frame-component17";
import { useRouter } from "next/router";
import styles from "./about-us-timeline.module.css";

const AboutUsTimeline = () => {
  const router = useRouter();

  const onDivelementorWidgetWrapClick = useCallback(() => {
    router.push("/about-us-story");
  }, [router]);

  const onDivelementorWidgetWrap1Click = useCallback(() => {
    router.push("/about-us-what-we-do");
  }, [router]);

  const onDivelementorWidgetWrap2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='wHATWEDO']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDivelementorWidgetWrap4Click = useCallback(() => {
    router.push("/about-us-chapters");
  }, [router]);

  const onDivelementorWidgetWrapContainerClick = useCallback(() => {
    router.push("/about-us-present-leadership");
  }, [router]);

  return (
    <div className={styles.aboutUsTimeline}>
      <img
        className={styles.aboutUsTimelineChild}
        alt=""
        src="/group-1261153386.svg"
      />
      <div className={styles.aboutUsWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
      </div>
      <FrameComponent17 />
      <div className={styles.linkOurStory}>
        <div className={styles.frameParent}>
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
          <div className={styles.sectionSection}>
            <button
              className={styles.divelementorWidgetWrap}
              onClick={onDivelementorWidgetWrapClick}
            >
              <div className={styles.heading2}>OUR STORY</div>
            </button>
            <button
              className={styles.divelementorWidgetWrap1}
              onClick={onDivelementorWidgetWrap1Click}
            >
              <div className={styles.whatWeDo} data-scroll-to="wHATWEDO">
                WHAT WE DO
              </div>
            </button>
            <button
              className={styles.divelementorWidgetWrap2}
              onClick={onDivelementorWidgetWrap2Click}
            >
              <div className={styles.heading21}>OBJECTIVES</div>
            </button>
            <button className={styles.divelementorWidgetWrap3}>
              <div className={styles.heading22}>GENERAL INFORMATION</div>
            </button>
            <div className={styles.whyTrustUsDivelementorWidg}>
              <button
                className={styles.divelementorWidgetWrap4}
                onClick={onDivelementorWidgetWrap4Click}
              >
                <div className={styles.heading23}>CHAPTERS</div>
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
                <b className={styles.heading24}>TIMELINE</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.timelineIcon}
        loading="lazy"
        alt=""
        src="/timeline@2x.png"
      />
    </div>
  );
};

export default AboutUsTimeline;
