import { useMemo } from "react";
import styles from "./content.module.css";

const Content = ({ image15IconBackgroundImage }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      backgroundImage: image15IconBackgroundImage,
    };
  }, [image15IconBackgroundImage]);

  return (
    <div className={styles.content}>
      <div className={styles.image15Parent} style={frameDiv3Style}>
        <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
        <img
          className={styles.image17Icon}
          loading="lazy"
          alt=""
          src="/image-171@2x.png"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.wrapper}>
              <b className={styles.b}>11</b>
            </div>
            <div className={styles.webinarTitle}>
              <div className={styles.jan}>JAN</div>
            </div>
            <b className={styles.darsanaWebinar}>2023</b>
          </div>
        </div>
        <b className={styles.darsanaWebinar3}>
          DARSANA WEBINAR 3 | എംജി സുരേഷ് കുമാർ | "കേരളത്തിന്‍റെ ഊർജഭദ്രത -
          സാധ്യതകളും വെല്ലുവിള�
        </b>
      </div>
    </div>
  );
};

export default Content;
