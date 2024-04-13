import { useMemo } from "react";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({
  image6IconWidth,
  arrow1IconFlex,
  arrow1IconWidth,
  propBackgroundImage,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: image6IconWidth,
    };
  }, [image6IconWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: arrow1IconFlex,
      width: arrow1IconWidth,
    };
  }, [arrow1IconFlex, arrow1IconWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.frameParent} style={frameDiv1Style}>
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
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.image16Parent} style={frameDiv2Style}>
              <img
                className={styles.image16Icon}
                alt=""
                src="/image-16@2x.png"
              />
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className={styles.arrow1Icon}
                loading="lazy"
                alt=""
                src="/arrow-1@2x.png"
              />
            </div>
            <img
              className={styles.arrow2Icon}
              loading="lazy"
              alt=""
              src="/arrow-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
