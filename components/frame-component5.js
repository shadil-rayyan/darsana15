import styles from "./frame-component5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.ourWorkParent}>
      <div className={styles.ourWork}>
        <div className={styles.sectionSection}>
          <div className={styles.ourStoryLink}>
            <button className={styles.divelementorWidgetWrap}>
              <div className={styles.heading2}>OUR STORY</div>
            </button>
            <button className={styles.divelementorWidgetWrap1}>
              <b className={styles.whatWeDo}>WHAT WE DO</b>
            </button>
          </div>
          <button className={styles.divelementorWidgetWrap2}>
            <div className={styles.heading21}>OBJECTIVES</div>
          </button>
          <button className={styles.divelementorWidgetWrap3}>
            <div className={styles.heading22}>GENERAL INFORMATION</div>
          </button>
          <div className={styles.howWeWorkLink}>
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
      <div className={styles.socialInitiativesContainer}>
        <div className={styles.weHaveUndertakenManySocialParent}>
          <div className={styles.weHaveUndertakenContainer}>
            <span className={styles.weHaveUndertakenContainer1}>
              <p className={styles.weHaveUndertaken}>
                We have undertaken many socially relevant initiatives in
                education, waste management, sustainable construction methods,
                e-governance at panchayat level and many more in addition to
                various charity initiatives like sponsoring economically weak
                students etc. We are the organisers of Biju Cherian Scholarship
                which finacially supports more than 40 engineering students with
                an annual budget outlay of Rs 5 lakhs.
              </p>
              <p className={styles.weAreThe}>
                We are the proud organizers of IGNITE, the biggest innovatiion
                contest held for college students in Kerala. We are also very
                active in designing and constructing alternate and sustainable
                houses. Darsana so far built 10 houses for the needy.
              </p>
            </span>
          </div>
          <img
            className={styles.image20Icon}
            loading="lazy"
            alt=""
            src="/image-20@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
