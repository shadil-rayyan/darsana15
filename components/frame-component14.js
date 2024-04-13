import FrameComponent15 from "./frame-component15";
import styles from "./frame-component14.module.css";

const FrameComponent14 = () => {
  return (
    <div className={styles.frameParent}>
      <FrameComponent15
        websiteDesignDidExactlyWh="Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design."
        kyleRobertsDVM="Kyle Roberts DVM"
        customerWebConsultant="Customer Web Consultant"
        contentRow="/ellipse-1@2x.png"
      />
      <FrameComponent15
        websiteDesignDidExactlyWh="I will let my mum know about this, she could really make use of software! Very easy to use. "
        kyleRobertsDVM="Sophia Anderson"
        customerWebConsultant="Internal Implementation Officer"
        contentRow="/ellipse-1-1@2x.png"
        propHeight="unset"
        propLineHeight="30px"
        propMinWidth="unset"
      />
      <div className={styles.frameGroup}>
        <div className={styles.frameChild} />
        <div className={styles.ifYouWantContainer}>
          <p className={styles.ifYouWant}>
            If you want real marketing that works and effective implementation -
            mobile app's got you covered.
          </p>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.stephenBrekkeParent}>
            <div className={styles.stephenBrekke}>Stephen Brekke</div>
            <div className={styles.legacyIntegrationProducer}>
              Legacy Integration Producer
            </div>
          </div>
        </div>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/ellipse-1-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent14;
