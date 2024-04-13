import styles from "./content-card.module.css";

const ContentCard = ({ onContentCardContainerClick }) => {
  return (
    <div className={styles.contentCard} onClick={onContentCardContainerClick}>
      <div className={styles.image}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img
          className={styles.interestedButtonIcon}
          loading="lazy"
          alt=""
          src="/interested-button.svg"
        />
        <div className={styles.categoryTypeComponentWrapper}>
          <button className={styles.categoryTypeComponent}>
            <div className={styles.technologyInnovation}>Scolarship</div>
          </button>
        </div>
      </div>
      <div className={styles.aMPM}>
        <div className={styles.ionticketParent}>
          <div className={styles.ionticket}>
            <div className={styles.readMore}>
              <div className={styles.wrapper}>
                <b className={styles.b}>11</b>
              </div>
              <div className={styles.starShape}>
                <div className={styles.jan}>JAN</div>
              </div>
              <b className={styles.b1}>2023</b>
            </div>
          </div>
          <div className={styles.bijuCherianScholarshipBCS}>
            <div className={styles.bijuCherianScholarship}>
              Biju Cherian Scholarship (BCS) program
            </div>
            <div className={styles.venue}>Venue</div>
            <div className={styles.am0000}>00:00 AM - 00:00 PM</div>
            <div className={styles.readMoreButton}>
              <input className={styles.ionticket1} type="checkbox" />
              <div className={styles.readMore1}>Read More</div>
              <div className={styles.programSummaryCard}>
                <div className={styles.interestedAreaContainer}>
                  <div className={styles.circularShape}>
                    <div className={styles.starSymbol} />
                    <img
                      className={styles.interestIndicatorIcon}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.interested}>10 interested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
