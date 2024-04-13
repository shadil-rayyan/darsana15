import { useCallback } from "react";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const DarsanaPage = () => {
  const router = useRouter();

  const onPrimaryButtonClick = useCallback(() => {
    router.push("/product");
  }, [router]);

  return (
    <div className={styles.darsanaPage}>
      <FrameComponent3 />
      <img className={styles.image55Icon} alt="" src="/image-55@2x.png" />
      <div className={styles.darsanaPageInner}>
        <img className={styles.frameChild} alt="" src="/rectangle-2193.svg" />
      </div>
      <div className={styles.empoweringDreamsTransforminWrapper}>
        <h1 className={styles.empoweringDreamsTransformin}>
          Empowering Dreams, Transforming Lives
        </h1>
      </div>
      <FrameComponent2 />
      <div className={styles.ourEventsWrapper}>
        <h1 className={styles.ourEvents}>Our Events</h1>
      </div>
      <FrameComponent1 />
      <div className={styles.dataFlowController}>
        <div className={styles.text}>
          <h1 className={styles.discoverTheMagic}>
            Discover the Magic of Locally Sourced Treasures!
          </h1>
          <FrameComponent />
        </div>
      </div>
      <div className={styles.primaryButtonWrapper}>
        <button className={styles.primaryButton} onClick={onPrimaryButtonClick}>
          <b className={styles.explore}>Explore</b>
        </button>
      </div>
    </div>
  );
};

export default DarsanaPage;
