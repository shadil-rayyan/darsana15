import { useCallback } from "react";
import { useRouter } from "next/router";
import ProductG1 from "./product-g1";
import styles from "./frame-component13.module.css";

const FrameComponent13 = () => {
  const router = useRouter();

  const onProductGContainerClick = useCallback(() => {
    router.push("/product-detail");
  }, [router]);

  return (
    <section className={styles.productImageElementParent}>
      <div className={styles.productImageElement}>
        <ProductG1
          image38="/image-38@2x.png"
          bellRossNightlum="Men Long Sleeve"
          onProductGContainerClick={onProductGContainerClick}
        />
        <ProductG1
          image38="/image-41-1@2x.png"
          bellRossNightlum="Polished seeds Bowl 250Ml "
          propFlex="1"
          propMinWidth="295px"
          propAlignSelf="unset"
        />
      </div>
      <div className={styles.productG}>
        <img
          className={styles.productGChild}
          alt=""
          src="/rectangle-3066.svg"
        />
        <div className={styles.image42Wrapper}>
          <img
            className={styles.image42Icon}
            loading="lazy"
            alt=""
            src="/image-42@2x.png"
          />
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/vector-31.svg"
          />
          <div className={styles.bellRossNightlumWrapper}>
            <div className={styles.bellRossContainer}>
              <p className={styles.aCofeeMachine}>{`a cofee machine `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.exportDropdownMenu}>
        <div className={styles.exportDropdown}>
          <button className={styles.dropdownTextArea}>
            <img
              className={styles.socialMediaIconColorgoogle}
              alt=""
              src="/social-media-icon-colorgoogle-sheets.svg"
            />
            <div className={styles.link}>
              <div className={styles.masterLink}>
                <div className={styles.default}>Electronics</div>
              </div>
            </div>
          </button>
          <div className={styles.dropdownTextArea1}>
            <img
              className={styles.socialMediaIconColorairtab}
              alt=""
              src="/social-media-icon-colorairtable.svg"
            />
            <div className={styles.link1}>
              <div className={styles.masterLink1}>
                <div className={styles.default1}>Gifts</div>
              </div>
            </div>
          </div>
          <div className={styles.dropdownTextArea2}>
            <img
              className={styles.lineRoundedcsvIcon}
              alt=""
              src="/line-roundedcsv.svg"
            />
            <div className={styles.link2}>
              <div className={styles.masterLink2}>
                <div className={styles.default2}>Farmer’s</div>
              </div>
            </div>
          </div>
          <button className={styles.dropdownTextArea3}>
            <img className={styles.lineRoundedcodeIcon} alt="" />
            <div className={styles.link3}>
              <div className={styles.masterLink3}>
                <div className={styles.default3}>Agriculture</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.productGWrapper}>
          <ProductG1
            image38="/image-43@2x.png"
            bellRossNightlum="a rare flower plant "
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent13;
