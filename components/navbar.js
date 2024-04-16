import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const onMenuStructureContainerClick = useCallback(() => {
    router.push("/product");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/about-us-story");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/initiatives");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/initiatives");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
      </div>
      <div className={styles.navigationMenu}>
        <div
          className={styles.menuStructure}
          onClick={onMenuStructureContainerClick}
        >
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
          <div
            className={styles.aboutUsWrapper}
            onClick={onFrameContainer1Click}
          >
            <div className={styles.aboutUs}>About Us</div>
          </div>
          <div className={styles.frameParent} onClick={onFrameContainer2Click}>
            <div className={styles.featuresWrapper}>
              <div className={styles.features}>Key intiatives</div>
            </div>
            <img
              className={styles.iconamoonarrowUp2Bold}
              alt=""
              src="/iconamoonarrowup2bold.svg"
            />
          </div>
          <div className={styles.frameGroup} onClick={onFrameContainer3Click}>
            <div className={styles.ourServicesWrapper}>
              <div className={styles.ourServices}>Other intiatives</div>
            </div>
            <img
              className={styles.iconamoonarrowUp2Bold1}
              alt=""
              src="/iconamoonarrowup2bold.svg"
            />
          </div>
          <div className={styles.whyAdsWrapper}>
            <div className={styles.whyAds}>Product</div>
          </div>
        </div>
      </div>
      <div className={styles.contactUsArea}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.contactUs}>Sign In</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
