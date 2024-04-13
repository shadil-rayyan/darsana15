import FrameComponent9 from "./frame-component9";
import styles from "./frame-component8.module.css";

const FrameComponent8 = () => {
  return (
    <section className={styles.storiesOfChangeParent}>
      <h3 className={styles.storiesOfChange}>STORIES OF CHANGE</h3>
      <div className={styles.frameParent}>
        <FrameComponent9
          websiteDesignDidExactlyWh="Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design."
          kyleRobertsDVM="Kyle Roberts DVM"
          customerWebConsultant="Customer Web Consultant"
          ellipse1="/ellipse-1@2x.png"
        />
        <FrameComponent9
          websiteDesignDidExactlyWh="I will let my mum know about this, she could really make use of software! Very easy to use. "
          kyleRobertsDVM="Sophia Anderson"
          customerWebConsultant="Internal Implementation Officer"
          ellipse1="/ellipse-1-1@2x.png"
          propHeight="unset"
          propLineHeight="30px"
          propMinWidth="unset"
        />
        <div className={styles.frameGroup}>
          <div className={styles.frameChild} />
          <h3 className={styles.ifYouWantContainer}>
            <p className={styles.ifYouWant}>
              If you want real marketing that works and effective implementation
              - mobile app's got you covered.
            </p>
          </h3>
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
    </section>
  );
};

export default FrameComponent8;
