import FrameComponent4 from "../components/frame-component4";
import WhyTrustUsLink from "../components/why-trust-us-link";
import styles from "./about-us-chapters.module.css";

const AboutUsChapters = () => {
  return (
    <div className={styles.aboutUsChapters}>
      <img
        className={styles.aboutUsChaptersChild}
        alt=""
        src="/rectangle-22.svg"
      />
      <section className={styles.aboutUsWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
      </section>
      <section className={styles.frameParent}>
        <FrameComponent4
          image6IconWidth="1140px"
          arrow1IconFlex="1"
          arrow1IconWidth="unset"
          propBackgroundImage="unset"
        />
        <WhyTrustUsLink />
        <div className={styles.frameGroup}>
          <div className={styles.asItsMembersWereWidelyDisWrapper}>
            <div className={styles.asItsMembersContainer}>
              <span>
                <p className={styles.asItsMembers}>
                  As its members were widely dispersed across the globe, Darsana
                  recognized early on that true growth could only be achieved
                  through a strong network of independent chapters in various
                  parts of the globe. Darsana's strength lies in its chapters.
                  The programs initiated and carried out by different chapters
                  have produced commendable results. Through chapters, Darsana's
                  dream of becoming an umbrella organization for over 3000
                  former NSSCE students from the early 1960s to the present is
                  being realized.
                </p>
                <p className={styles.blankLine}>
                  <a
                    className={styles.blankLine1}
                    href="https://darsana.in/aboutus#"
                    target="_blank"
                  >
                    <span className={styles.blankLine2}>&nbsp;</span>
                  </a>
                </p>
              </span>
            </div>
          </div>
          <img
            className={styles.image17Icon}
            loading="lazy"
            alt=""
            src="/image-17@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUsChapters;
