import FrameComponent11 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";
import styles from "./gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.headingWrapper}>
        <b className={styles.heading}> Gallery</b>
      </div>
      <section className={styles.frameParent}>
        <FrameComponent11 />
        <FrameComponent10 />
      </section>
    </div>
  );
};

export default Gallery;
