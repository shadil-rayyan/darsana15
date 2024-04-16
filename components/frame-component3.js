import Component from "./component";
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.heroContentParent}>
      <div className={styles.heroContent}>
        <div className={styles.image55Parent}>
          <img className={styles.image55Icon} alt="" src="/image-55@2x.png" />
          <h1 className={styles.empoweringDreamsTransformin}>
            Empowering Dreams, Transforming Lives
          </h1>
        </div>
      </div>
      <div className={styles.callToAction}>
        <div className={styles.actionButtonArea}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonSet}>
              <div className={styles.secondaryButtonParent}>
                <button className={styles.secondaryButton}>
                  <div className={styles.secondaryButtonText}>What we do</div>
                </button>
                <button className={styles.videoButton}>
                  <img
                    className={styles.playIcon}
                    alt=""
                    src="/play-icon@2x.png"
                  />
                  <div className={styles.playLabel}>
                    <div className={styles.playVideo}>Play Video</div>
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.scholarshipArea}>
              <div className={styles.scholarshipContent}>
                <div className={styles.scholarshipInfo}>
                  <div className={styles.scholarshipDetails}>
                    <div className={styles.bijuCherianScholarshipBcsParent}>
                      <div className={styles.bijuCherianScholarship}>
                        Biju Cherian Scholarship (BCS) program
                      </div>
                      <div className={styles.scholarshipStats}>
                        <div className={styles.statisticsDisplay}>
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
                    </div>
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
                <div className={styles.line} />
              </div>
              <div className={styles.designElement}>
                <img
                  className={styles.designElementChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2957.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eventHeaderParent}>
          <div className={styles.eventHeader}>
            <h1 className={styles.ourEvents}>Our Events</h1>
          </div>
          <div className={styles.eventList}>
            <div className={styles.event}>
              <div className={styles.eventDate}>
                <div className={styles.day}>
                  <div className={styles.resultContainer}>13</div>
                </div>
                <div className={styles.apr}>apr</div>
              </div>
              <div className={styles.eventDescription}>
                <div className={styles.eventContent}>
                  <img
                    className={styles.eventHeaderIcon}
                    alt=""
                    src="/event-header@2x.png"
                  />
                  <div className={styles.aDayWithOurWonderfulChildWrapper}>
                    <h2
                      className={styles.aDayWith}
                    >{`A day with our wonderful children `}</h2>
                  </div>
                </div>
              </div>
              <div className={styles.eventNavigation}>
                <img
                  className={styles.arrowButtonIcon}
                  loading="lazy"
                  alt=""
                  src="/arrow-button.svg"
                />
              </div>
            </div>
            <div className={styles.event1}>
              <div className={styles.eventDateCopy}>
                <div className={styles.eventDay}>
                  <div className={styles.div}>25</div>
                </div>
                <div className={styles.apr1}>apr</div>
              </div>
              <div className={styles.eventDescriptionCopy}>
                <div className={styles.eventContentCopy}>
                  <img
                    className={styles.eventHeaderIcon1}
                    alt=""
                    src="/event-header@2x.png"
                  />
                  <div className={styles.eventTitleArea}>
                    <div className={styles.navigationAndTitle}>
                      <img
                        className={styles.arrowButtonIcon1}
                        loading="lazy"
                        alt=""
                        src="/arrow-button-1.svg"
                      />
                      <h2 className={styles.seminarCaringFor}>
                        Seminar: Caring for children with autism
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.moreEventsButton}>
              <button className={styles.button}>
                <img className={styles.icon} alt="" src="/icon-1@2x.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
