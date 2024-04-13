import { useMemo } from "react";
import styles from "./frame-component9.module.css";

const FrameComponent9 = ({
  websiteDesignDidExactlyWh,
  kyleRobertsDVM,
  customerWebConsultant,
  ellipse1,
  propHeight,
  propLineHeight,
  propMinWidth,
}) => {
  const websiteDesignDidStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  const customerWebConsultantStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameChild} />
      <h3 className={styles.websiteDesignDid} style={websiteDesignDidStyle}>
        {websiteDesignDidExactlyWh}
      </h3>
      <div className={styles.frameWrapper}>
        <div className={styles.kyleRobertsDvmParent}>
          <div className={styles.kyleRobertsDvm}>{kyleRobertsDVM}</div>
          <div
            className={styles.customerWebConsultant}
            style={customerWebConsultantStyle}
          >
            {customerWebConsultant}
          </div>
        </div>
      </div>
      <img className={styles.frameItem} loading="lazy" alt="" src={ellipse1} />
    </div>
  );
};

export default FrameComponent9;
