import { useCallback } from "react";
import Event1 from "./event1";
import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
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
    <section className={styles.logicBranch}>
      <img
        className={styles.imageGalleryIcon}
        loading="lazy"
        alt=""
        src="/rectangle-2967@2x.png"
      />
      <div className={styles.patternMatcher}>
        <div className={styles.sequenceHandler}>
          <button className={styles.button}>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </button>
        </div>
        <div className={styles.sequenceHandler1}>
          <button className={styles.button1}>
            <img className={styles.icon1} alt="" src="/icon-1.svg" />
          </button>
        </div>
        <div className={styles.variableHolder}>
          <div className={styles.loopStructure}>
            <div className={styles.inputProcessor}>
              <Event1
                prop="13"
                aDayWithOurWonderfulChild="A day with our wonderful children "
                arrowButton="/arrow-button.svg"
              />
              <Event1
                prop="25"
                aDayWithOurWonderfulChild="Seminar: Caring for children with autism"
                arrowButton="/arrow-button-1.svg"
                propMinWidth="397px"
                propWidth="611.3px"
                propWidth1="unset"
                propAlignSelf="unset"
                propFlex="unset"
                propMinWidth1="56.5px"
                propWidth2="unset"
                propFlex1="1"
                propMinWidth2="254px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.columnContainerInner}>
              <div className={styles.tableHeaderParent}>
                <div className={styles.tableHeader}>
                  <div className={styles.conversationParent}>
                    <h3 className={styles.conversation}>Conversation</h3>
                    <img
                      className={styles.icon2}
                      loading="lazy"
                      alt=""
                      src="/3238375-44135-1.svg"
                      onClick={onNodeClick}
                    />
                  </div>
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
            <div className={styles.backdropImageContainer}>
              <div className={styles.contentBlockContainer}>
                <div className={styles.sliderDots}>
                  <div className={styles.dot} />
                  <div className={styles.dot1} />
                  <div className={styles.dot2} />
                  <div className={styles.dot3} />
                  <div className={styles.dot4} />
                </div>
              </div>
              <div className={styles.chartWithUs}>
                <div className={styles.chartWithUsChild} />
                <div className={styles.logoContainerContainer}>
                  <div className={styles.frameParent}>
                    <div className={styles.image56Wrapper}>
                      <img
                        className={styles.image56Icon}
                        loading="lazy"
                        alt=""
                        src="/image-56@2x.png"
                        onClick={onImage56Click}
                      />
                    </div>
                    <h3 className={styles.gallery}>Gallery</h3>
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
            </div>
            <div className={styles.columnContainerChild}>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.initiativesParent}>
                    <h3 className={styles.initiatives}>Initiatives</h3>
                    <img
                      className={styles.icon3}
                      loading="lazy"
                      alt=""
                      src="/6170572-3014248-1.svg"
                      onClick={onNode1Click}
                    />
                  </div>
                </div>
                <div className={styles.washingtonAveManchesterContainer}>
                  <p className={styles.washingtonAveManchester}>
                    4517 Washington Ave. Manchester
                  </p>
                  <p className={styles.kentucky39495}>Kentucky 39495</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
