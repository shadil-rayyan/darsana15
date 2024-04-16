import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  const router = useRouter();

  const onPrimaryButtonClick = useCallback(() => {
    router.push("/product");
  }, [router]);

  return (
    <section className={styles.treasuresContentWrapper}>
      <div className={styles.treasuresContent}>
        <div className={styles.textParent}>
          <div className={styles.text}>
            <h1 className={styles.discoverTheMagic}>
              Discover the Magic of Locally Sourced Treasures!
            </h1>
          </div>
          <div className={styles.exploreButton}>
            <button
              className={styles.primaryButton}
              onClick={onPrimaryButtonClick}
            >
              <b className={styles.explore}>Explore</b>
            </button>
          </div>
        </div>
        <div className={styles.imageGallery}>
          <div className={styles.galleryImages}>
            <img
              className={styles.galleryImageIcon}
              alt=""
              src="/gallery-image@2x.png"
            />
            <div className={styles.galleryLayout}>
              <img
                className={styles.imageGalleryIcon}
                loading="lazy"
                alt=""
                src="/rectangle-2967@2x.png"
              />
              <div className={styles.logoContainerContainerContaParent}>
                <img
                  className={styles.logoContainerContainerConta}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2967-1@2x.png"
                />
                <img
                  className={styles.footerLinkContainerContaine}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2967-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
