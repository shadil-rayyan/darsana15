import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  const router = useRouter();

  const onNodeClick = useCallback(() => {
    router.push("/conversation-list");
  }, [router]);

  const onImage56Click = useCallback(() => {
    router.push("/gallery");
  }, [router]);

  const onNode1Click = useCallback(() => {
    router.push("/initiatives");
  }, [router]);

  return (
    <section className={styles.testimonialContainerWrapper}>
      <div className={styles.testimonialContainer}>
        <div className={styles.analysisDescriptionWrapper}>
          <div className={styles.analysisDescription}>
            <div className={styles.conversationBox}>
              <h3 className={styles.conversation}>Conversation</h3>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/3238375-44135-1.svg"
                onClick={onNodeClick}
              />
            </div>
            <div className={styles.weAnalyseYourContainer}>
              <p className={styles.weAnalyseYour}>
                We analyse your website’s structure,
              </p>
              <p
                className={styles.internalArchitecture}
              >{`internal architecture & other key`}</p>
            </div>
          </div>
        </div>
        <div className={styles.reputationDescriptionParent}>
          <div className={styles.reputationDescription}>
            <div className={styles.reputationImage}>
              <div className={styles.imageSlider}>
                <div className={styles.sliderDots}>
                  <div className={styles.sliderDots1}>
                    <div className={styles.dot} />
                    <div className={styles.dot1} />
                    <div className={styles.dot2} />
                    <div className={styles.dot3} />
                    <div className={styles.dot4} />
                  </div>
                </div>
                <img
                  className={styles.image56Icon}
                  loading="lazy"
                  alt=""
                  src="/image-56@2x.png"
                  onClick={onImage56Click}
                />
              </div>
            </div>
            <div className={styles.weAreWellContainer}>
              <p className={styles.weAreWell}>
                We are well known within the industry
              </p>
              <p className={styles.forOurTechnical}>
                for our technical capabilities
              </p>
            </div>
          </div>
          <div className={styles.galleryDescriptionParent}>
            <div className={styles.galleryDescription}>
              <h3 className={styles.gallery}>Gallery</h3>
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/6170572-3014248-1.svg"
                onClick={onNode1Click}
              />
            </div>
            <div className={styles.washingtonAveManchesterKenWrapper}>
              <div className={styles.washingtonAveManchesterContainer}>
                <p className={styles.washingtonAveManchester}>
                  4517 Washington Ave. Manchester
                </p>
                <p className={styles.kentucky39495}>Kentucky 39495</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.initiativesHeader}>
          <h3 className={styles.initiatives}>Initiatives</h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
