import { useMemo } from "react";
import styles from "./event1.module.css";

const Event1 = ({
  prop,
  aDayWithOurWonderfulChild,
  arrowButton,
  propMinWidth,
  propWidth,
  propWidth1,
  propAlignSelf,
  propFlex,
  propMinWidth1,
  propWidth2,
  propFlex1,
  propMinWidth2,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const eventStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bGStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const outputFormatterStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const matrixTransformerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const resultContainerStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propMinWidth1]);

  const networkConnectorStyle = useMemo(() => {
    return {
      width: propWidth2,
      flex: propFlex1,
      minWidth: propMinWidth2,
    };
  }, [propWidth2, propFlex1, propMinWidth2]);

  const nextEventsStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const searchDropdownStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={styles.event} style={eventStyle}>
      <div className={styles.bg} style={bGStyle} />
      <div className={styles.outputFormatter} style={outputFormatterStyle}>
        <div
          className={styles.matrixTransformer}
          style={matrixTransformerStyle}
        >
          <div className={styles.resultContainer} style={resultContainerStyle}>
            {prop}
          </div>
        </div>
        <div className={styles.apr}>apr</div>
      </div>
      <div className={styles.networkConnector} style={networkConnectorStyle}>
        <div className={styles.databaseManager}>
          <div className={styles.eventHeader}>
            <div className={styles.nextEvents} style={nextEventsStyle}>
              Next Events
            </div>
            <div className={styles.messageReceiver}>
              <div
                className={styles.searchDropdown}
                style={searchDropdownStyle}
              />
            </div>
          </div>
          <h2 className={styles.aDayWith}>{aDayWithOurWonderfulChild}</h2>
        </div>
      </div>
      <div className={styles.arrowButtonWrapper}>
        <img
          className={styles.arrowButtonIcon}
          loading="lazy"
          alt=""
          src={arrowButton}
        />
      </div>
    </div>
  );
};

export default Event1;
