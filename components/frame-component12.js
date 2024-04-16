import ProductG from "./product-g";
import styles from "./frame-component12.module.css";

const FrameComponent12 = () => {
  return (
    <section className={styles.productGParent}>
      <ProductG
        image39="/image-39@2x.png"
        vector3="/vector-3-41.svg"
        bellRossNightlum="cement making machine "
      />
      <ProductG
        image39="/image-38-1@2x.png"
        vector3="/vector-3-5.svg"
        bellRossNightlum="flour making machine"
        propWidth="244.6px"
        propFlex="1"
      />
      <ProductG
        image39="/image-37@2x.png"
        vector3="/vector-3-41.svg"
        bellRossNightlum="              tractor "
        propWidth="248px"
        propFlex="1"
      />
      <div className={styles.productG}>
        <img
          className={styles.productGChild}
          alt=""
          src="/rectangle-3066.svg"
        />
        <div className={styles.image36Wrapper}>
          <img
            className={styles.image36Icon}
            loading="lazy"
            alt=""
            src="/image-36@2x.png"
          />
        </div>
        <img
          className={styles.productGItem}
          loading="lazy"
          alt=""
          src="/vector-31.svg"
        />
        <div className={styles.bellRossNightlumWrapper}>
          <div className={styles.bellRossContainer}>
            <p className={styles.aGrassCutting}>a grass cutting machine</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
