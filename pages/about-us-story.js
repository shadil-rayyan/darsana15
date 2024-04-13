import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";
import styles from "./about-us-story.module.css";

const AboutUsStory = () => {
  const router = useRouter();

  const onDivelementorWidgetWrap1Click = useCallback(() => {
    router.push("/about-us-what-we-do");
  }, [router]);

  const onDivelementorWidgetWrap3Click = useCallback(() => {
    router.push("/about-us-general-information");
  }, [router]);

  const onDivelementorWidgetWrap4Click = useCallback(() => {
    router.push("/about-us-chapters");
  }, [router]);

  const onDivelementorWidgetWrapContainerClick = useCallback(() => {
    router.push("/about-us-present-leadership");
  }, [router]);

  const onDivelementorWidgetWrap5Click = useCallback(() => {
    router.push("/about-us-timeline");
  }, [router]);

  return (
    <div className={styles.aboutUsStory}>
      <img
        className={styles.aboutUsStoryChild}
        alt=""
        src="/rectangle-22.svg"
      />
      <b className={styles.heading2}>OUR STORY</b>
      <div className={styles.whatWeDo}>WHAT WE DO</div>
      <div className={styles.heading21}>OBJECTIVES</div>
      <div className={styles.heading22}>GENERAL INFORMATION</div>
      <div className={styles.heading23}>CHAPTERS</div>
      <div className={styles.heading2Container}>
        <span className={styles.heading2Container1}>
          <p className={styles.present}>PRESENT</p>
          <p className={styles.leadership}>LEADERSHIP</p>
        </span>
      </div>
      <div className={styles.heading24}>TIMELINE</div>
      <section className={styles.aboutUsWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
      </section>
      <section className={styles.frameParent}>
        <FrameComponent4 />
        <div className={styles.sectionSectionWrapper}>
          <div className={styles.sectionSection}>
            <button className={styles.divelementorWidgetWrap}>
              <b className={styles.heading25}>OUR STORY</b>
            </button>
            <button
              className={styles.divelementorWidgetWrap1}
              onClick={onDivelementorWidgetWrap1Click}
            >
              <div className={styles.whatWeDo1}>WHAT WE DO</div>
            </button>
            <button className={styles.divelementorWidgetWrap2}>
              <div className={styles.heading26}>OBJECTIVES</div>
            </button>
            <button
              className={styles.divelementorWidgetWrap3}
              onClick={onDivelementorWidgetWrap3Click}
            >
              <div className={styles.heading27}>GENERAL INFORMATION</div>
            </button>
            <div className={styles.divelementorWidgetWrapParent}>
              <button
                className={styles.divelementorWidgetWrap4}
                onClick={onDivelementorWidgetWrap4Click}
              >
                <div className={styles.heading28}>CHAPTERS</div>
              </button>
              <div
                className={styles.divelementorWidgetWrap5}
                onClick={onDivelementorWidgetWrapContainerClick}
              >
                <div className={styles.heading2Container2}>
                  <span className={styles.heading2Container3}>
                    <p className={styles.present1}>PRESENT</p>
                    <p className={styles.leadership1}>LEADERSHIP</p>
                  </span>
                </div>
              </div>
              <button
                className={styles.divelementorWidgetWrap6}
                onClick={onDivelementorWidgetWrap5Click}
              >
                <div className={styles.heading29}>TIMELINE</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.image21Wrapper}>
            <img
              className={styles.image21Icon}
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className={styles.darsanaWasEstablishedContainer}>
            <span>
              <p className={styles.darsanaWasEstablished}>
                Darsana was established in 2007 as a charitable society with a
                registered office in Palakkad, Kerala. The idea for such an
                organization arose during a meeting of a few
                progressive-thinking students from the 1991 graduating class of
                NSS College of Engineering, Palakkad (NSSCE). The meeting was
                called to consider establishing an endowment for NSS College of
                Engineering Palakkad students in honor of their batchmate, the
                late Comrade Biju Cheriyan. This sparked the idea of bringing
                together all like-minded students from the 1960s to the
                millennium batches. Darsana was inaugurated on August 5, 2007,
                by the then honorable Education Minister of Kerala M. A. Baby in
                a function organized at the NSSCE campus. It was presided over
                by the college principal. The then member of parliament for
                Palakkad constituency, N. N. Krishnadas also attended.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsStory;
