import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push("/contact-us-final");
  }, [router]);

  const onPricingTextClick = useCallback(() => {
    router.push("/initiatives");
  }, [router]);

  const onGalleryText1Click = useCallback(() => {
    router.push("/chapters");
  }, [router]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
        <div className={styles.wrapperDivlogo}>
          <img className={styles.divlogoIcon} alt="" src="/divlogo1@2x.png" />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuheader}>
          <div className={styles.about} onClick={onAboutTextClick}>
            Contact us
          </div>
          <div className={styles.features}>About us</div>
          <div className={styles.pricing} onClick={onPricingTextClick}>
            Initiatives
          </div>
          <div className={styles.gallery} onClick={onGalleryText1Click}>
            Chapters
          </div>
          <div className={styles.team}>Eye magazine</div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialIcons}>
          <div className={styles.socialWrapper}>
            <img className={styles.socialIcon} alt="" src="/social.svg" />
          </div>
          <div className={styles.socialContainer}>
            <img className={styles.socialIcon1} alt="" src="/social@2x.png" />
          </div>
          <img className={styles.socialIcon2} alt="" src="/social1.svg" />
          <div className={styles.socialFrame}>
            <img className={styles.socialIcon3} alt="" src="/social2@2x.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
