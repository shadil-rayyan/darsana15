import { useMemo } from "react";
import styles from "./component.module.css";

const Component = ({ number, text, propLeft }) => {
  const dividerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.logoHolder}>
      <b className={styles.number}>{number}</b>
      <div className={styles.contentBlock}>{text}</div>
      <div className={styles.divider} style={dividerStyle} />
    </div>
  );
};

export default Component;
