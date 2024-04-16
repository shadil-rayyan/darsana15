import MainContainer from "../components/main-container";
import Navbar from "../components/navbar";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Articles from "../components/articles";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const DarsanaPage = () => {
  return (
    <div className={styles.darsanaPage}>
      <MainContainer />
      <div className={styles.banner}>
        <img
          className={styles.bannerContentIcon}
          alt=""
          src="/banner-content@2x.png"
        />
      </div>
      <Navbar />
      <section className={styles.utilityBar}>
        <div className={styles.utilityItem}>
          <button className={styles.button}>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </button>
        </div>
        <FrameComponent3 />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <div className={styles.featuredOnWrapper}>
        <h1 className={styles.featuredOn}>Featured On</h1>
      </div>
      <Articles />
      <FrameComponent />
    </div>
  );
};

export default DarsanaPage;
