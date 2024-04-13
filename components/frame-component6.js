import styles from "./frame-component6.module.css";

const FrameComponent6 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.weAreAGlobalDiasporaOfMoParent}>
        <h1 className={styles.weAreAContainer}>
          <span>
            <p
              className={styles.weAreA}
            >{`We are a global diaspora of more than thousand highly experienced `}</p>
            <p className={styles.p}>{`                   `}</p>
          </span>
        </h1>
        <div className={styles.weHelpCommunity}>
          <h1 className={styles.andSociallyCommitted}>
            and socially committed engineers . We work towards making a
          </h1>
        </div>
        <div className={styles.lifeChanger}>
          <h1 className={styles.differenceInThe}>
            {" "}
            difference in the life of needy and down trodden
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
