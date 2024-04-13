import styles from "./frame-component7.module.css";

const FrameComponent7 = () => {
  return (
    <footer className={styles.frameParent}>
      <div className={styles.linkLogopngWrapper}>
        <img
          className={styles.linkLogopng}
          loading="lazy"
          alt=""
          src="/divlogo@2x.png"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.learnMoreParent}>
            <h3 className={styles.learnMore}>Learn More</h3>
            <div className={styles.aboutAlyeskaPressContainer}>
              <p className={styles.aboutDarsana}>About Darsana</p>
              <p className={styles.contactUs}>Contact us</p>
              <p className={styles.chapters}>Chapters</p>
              <p className={styles.eyeMagazine}>Eye magazine</p>
            </div>
          </div>
        </div>
        <div className={styles.ticketsAndBookingParent}>
          <div className={styles.ticketsAndBooking}>
            <div className={styles.ticketsBookingWrapper}>
              <h3 className={styles.ticketsBooking}>{`Programs `}</h3>
            </div>
            <div className={styles.liftTicketsSeasonContainer}>
              <p className={styles.scholarship}>Scholarship</p>
              <p className={styles.ignite}>{`Ignite `}</p>
              <p className={styles.skillDevelopment}>
                Skill Development Program
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.contactUsParent}>
                <h3 className={styles.contactUs1}>Contact Us</h3>
                <h3 className={styles.social}>Social</h3>
              </div>
              <div className={styles.contactUs2}>
                <div className={styles.hotelResv}>
                  <div className={styles.reservation}>
                    <div className={styles.hotelReservation}>
                      Darsana Office
                    </div>
                    <div className={styles.youTubeInsta}>123-456-7890</div>
                  </div>
                  <div className={styles.fBCircleLinkedIn}>
                    <div className={styles.ticketOffice}>
                      <img
                        className={styles.youtubeIcon}
                        loading="lazy"
                        alt=""
                        src="/youtube@2x.png"
                      />
                      <img
                        className={styles.instagramCircleIcon}
                        loading="lazy"
                        alt=""
                        src="/instagram-circle@2x.png"
                      />
                      <img
                        className={styles.linkedinIcon}
                        loading="lazy"
                        alt=""
                        src="/linkedin@2x.png"
                      />
                      <img
                        className={styles.facebookIcon}
                        loading="lazy"
                        alt=""
                        src="/facebook@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.ticketOfficeParent}>
                  <div className={styles.ticketOffice1}>Mail us</div>
                  <div className={styles.div}>darsana@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent7;
