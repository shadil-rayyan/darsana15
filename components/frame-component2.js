import Component from "./component";
import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.darsanaPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.secondaryButtonParent}>
                  <button className={styles.secondaryButton}>
                    <div className={styles.secondaryButtonText}>What we do</div>
                  </button>
                  <div className={styles.videoButtonWrapper}>
                    <button className={styles.videoButton}>
                      <img
                        className={styles.playIcon}
                        alt=""
                        src="/play-icon.svg"
                      />
                      <div className={styles.childLink}>
                        <div className={styles.playVideo}>Play Video</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className={styles.bijuCherianScholarshipBcsWrapper}>
                  <div className={styles.bijuCherianScholarship}>
                    Biju Cherian Scholarship (BCS) program
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.childButtonParent}>
                  <div className={styles.childButton} />
                  <div className={styles.sliderDots}>
                    <div className={styles.dot} />
                    <div className={styles.dot1} />
                    <div className={styles.dot2} />
                    <div className={styles.dot3} />
                    <div className={styles.dot4} />
                    <div className={styles.dot5} />
                    <div className={styles.dot6} />
                    <div className={styles.dot7} />
                  </div>
                </div>
              </div>
              <div className={styles.counterWrapper}>
                <div className={styles.counter}>
                  <Component number="20M" text="Number of Supporters" />
                  <Component
                    number="15K+"
                    text="Volunteers Worldwide"
                    propLeft="150.9px"
                  />
                  <Component
                    number="68K+"
                    text="We've Helped Raise"
                    propLeft="calc(50% + 28.3px)"
                  />
                  <Component
                    number="10M+"
                    text="Projects Funded"
                    propLeft="calc(50% + 28.3px)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-2957.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
