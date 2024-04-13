import { useMemo } from "react";
import styles from "./frame-component17.module.css";

const FrameComponent17 = ({ weAreAWidth, weAreAAlignSelf }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      width: weAreAWidth,
      alignSelf: weAreAAlignSelf,
    };
  }, [weAreAWidth, weAreAAlignSelf]);

  return (
    <div className={styles.aboutUsTimelineInner} style={frameDiv5Style}>
      <div className={styles.weAreAGlobalDiasporaOfMoParent}>
        <h1 className={styles.weAreAContainer}>
          <span>
            <p
              className={styles.weAreA}
            >{`We are a global diaspora of more than thousand highly experienced `}</p>
            <p className={styles.p}>{`                   `}</p>
          </span>
        </h1>
        <div className={styles.andSociallyCommittedEngineeWrapper}>
          <h1 className={styles.andSociallyCommitted}>
            and socially committed engineers . We work towards making a
          </h1>
        </div>
        <div className={styles.differenceInTheLifeOfNeedWrapper}>
          <h1 className={styles.differenceInThe}>
            {" "}
            difference in the life of needy and down trodden
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent17;
