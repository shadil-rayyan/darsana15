import FrameComponent16 from "../../../../Darsana15/components/frame-component16";
import IconContent from "../../../../Darsana15/components/icon-content";
import FrameComponent14 from "../../../../Darsana15/components/frame-component14";
import ContactInfo from "../../../../Darsana15/components/contact-info";
import styles from "./chapters.module.css";

const Chapters = () => {
  return (
    <div className={styles.chapters}>
      <div className={styles.placeholderImage} />
      <FrameComponent16 />
      <section className={styles.contentRow}>
        <IconContent />
      </section>
      <section className={styles.chaptersInner}>
        <div className={styles.frameParent}>
          <FrameComponent14 />
          <ContactInfo />
        </div>
      </section>
    </div>
  );
};

export default Chapters;
