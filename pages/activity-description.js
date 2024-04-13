import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import styles from "./activity-description.module.css";

const ActivityDescription = () => {
  return (
    <div className={styles.activityDescription}>
      <div className={styles.placeholderImage} />
      <section className={styles.activityDescriptionInner}>
        <div className={styles.primaryFRAMEParent}>
          <div className={styles.primaryFRAME}>
            <div className={styles.darsanaCommunityEngagementWrapper}>
              <h1 className={styles.darsanaCommunity}>
                Darsana - Community Engagement
              </h1>
            </div>
            <div className={styles.communityEngagement}>
              <div className={styles.byFullNameWrapper}>
                <div className={styles.byFullNameContainer}>
                  <span>By</span>
                  <span className={styles.fullName}> Full name</span>
                </div>
              </div>
              <div className={styles.jan2022Parent}>
                <div className={styles.jan2022}>11 Jan 2022</div>
                <div className={styles.div}>•</div>
                <div className={styles.minRead}>5 min read</div>
                <img
                  className={styles.image44Icon}
                  loading="lazy"
                  alt=""
                  src="/image-44@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.storiesOfChangeParent}>
              <div className={styles.storiesOfChange}>
                <div className={styles.sliderDots}>
                  <div className={styles.dot} />
                  <div className={styles.dot1} />
                  <div className={styles.dot2} />
                  <div className={styles.dot3} />
                  <div className={styles.dot4} />
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.shareButtonParent}>
                  <div className={styles.shareButton}>
                    <img
                      className={styles.iconLink}
                      loading="lazy"
                      alt=""
                      src="/icon--link.svg"
                    />
                  </div>
                  <div className={styles.shareButton1}>
                    <img
                      className={styles.iconLinkedin}
                      loading="lazy"
                      alt=""
                      src="/icon--linkedin.svg"
                    />
                  </div>
                  <div className={styles.shareButton2}>
                    <img
                      className={styles.iconX}
                      loading="lazy"
                      alt=""
                      src="/icon--x.svg"
                    />
                  </div>
                  <div className={styles.shareButton3}>
                    <img
                      className={styles.iconFacebook}
                      loading="lazy"
                      alt=""
                      src="/icon--facebook.svg"
                    />
                  </div>
                </div>
                <h3 className={styles.darsanasSupportToContainer}>
                  <p className={styles.darsanasSupportTo}>
                    Darsana's support to Mysore Mine School and KS Vasan
                    memorial school is continuing ...
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.weProvidedGreen}>
                    We provided green boards to all class rooms, toys for
                    children in small classesand outdoor play
                  </p>
                  <p
                    className={styles.equipmentsToAll}
                  >{`equipments to all senior classes. Happy to see the library becoming functional utilizing the `}</p>
                  <p className={styles.booksContributedBy}>
                    books contributed by Darsana Members.
                  </p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.anotherHighlightIs}>
                    Another highlight is Darsana sponsored all the prizes for
                    the sports day this year.The commitment of Bangalore chapter
                    is what is driving this whole programme.
                  </p>
                  <p className={styles.blankLine2}>&nbsp;</p>
                  <p className={styles.asOurContinued}>
                    As our continued commitment to the students of school,
                    Darsana has started sponsoring eggs to students.Funding for
                    this inititaive is coming from the US Chapter
                  </p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent8 />
      <FrameComponent7 />
    </div>
  );
};

export default ActivityDescription;
