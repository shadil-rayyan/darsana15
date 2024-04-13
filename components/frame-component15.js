import { useMemo } from "react";
import styles from "./frame-component15.module.css";

const FrameComponent15 = ({
  websiteDesignDidExactlyWh,
  kyleRobertsDVM,
  customerWebConsultant,
  contentRow,
  propHeight,
  propLineHeight,
  propMinWidth,
}) => {
  const websiteDesignDid1Style = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  const customerWebConsultant1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameChild} />
      <div className={styles.websiteDesignDid} style={websiteDesignDid1Style}>
        {websiteDesignDidExactlyWh}
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.kyleRobertsDvmParent}>
          <div className={styles.kyleRobertsDvm}>{kyleRobertsDVM}</div>
          <div
            className={styles.customerWebConsultant}
            style={customerWebConsultant1Style}
          >
            {customerWebConsultant}
          </div>
        </div>
      </div>
      <img
        className={styles.contentRowIcon}
        loading="lazy"
        alt=""
        src={contentRow}
      />
    </div>
  );
};

export default FrameComponent15;
