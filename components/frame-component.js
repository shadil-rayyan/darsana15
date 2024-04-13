import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.statisticsParent}>
      <img className={styles.statisticsIcon} alt="" src="/statistics.svg" />
      <div className={styles.listBuilder}>
        <img
          className={styles.logoContainerContainerConta}
          loading="lazy"
          alt=""
          src="/rectangle-2967-1@2x.png"
        />
      </div>
      <div className={styles.dropdownMenu}>
        <div className={styles.progressBar}>
          <img
            className={styles.tableHeaderContainer}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <div className={styles.dropdownMenuInner}>
          <div className={styles.articleWrapper}>
            <div className={styles.article}>
              <div className={styles.divfield} />
              <img className={styles.oip1Icon} alt="" src="/oip-1@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.article1}>
          <div className={styles.divfield1}>
            <img
              className={styles.malayala01Icon}
              alt=""
              src="/malayala-0-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.articleParent}>
          <div className={styles.article2} />
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/1113957-1@2x.png"
          />
        </div>
        <div className={styles.article3}>
          <img
            className={styles.timesNowNoidaFilmCityTeleIcon}
            loading="lazy"
            alt=""
            src="/timesnownoidafilmcitytelevisionchannellogopngfavpngndrzlhwer1ssjl4thcpb2aebc-1@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.footerLinkContainerContaine}
        loading="lazy"
        alt=""
        src="/rectangle-2967-2@2x.png"
      />
      <h1 className={styles.featuredOn}>Featured On</h1>
    </div>
  );
};

export default FrameComponent;
