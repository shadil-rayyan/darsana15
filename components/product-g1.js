import { useMemo } from "react";
import styles from "./product-g1.module.css";

const ProductG1 = ({
  image38,
  bellRossNightlum,
  propFlex,
  propMinWidth,
  propAlignSelf,
  onProductGContainerClick,
}) => {
  const productGStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={styles.productG}
      onClick={onProductGContainerClick}
      style={productGStyle}
    >
      <img className={styles.productGChild} alt="" src="/rectangle-306.svg" />
      <div className={styles.bellRossLabel}>
        <img
          className={styles.image38Icon}
          loading="lazy"
          alt=""
          src={image38}
        />
      </div>
      <div className={styles.exportDropdown}>
        <img
          className={styles.masterLinkIcon}
          loading="lazy"
          alt=""
          src="/vector-31.svg"
        />
        <div className={styles.defaultLink}>
          <div className={styles.bellRoss}>{bellRossNightlum}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductG1;
