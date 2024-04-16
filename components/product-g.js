import { useMemo } from "react";
import styles from "./product-g.module.css";

const ProductG = ({
  image39,
  vector3,
  bellRossNightlum,
  propWidth,
  propFlex,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bellRossStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.productG}>
      <img className={styles.productGChild} alt="" src="/rectangle-3066.svg" />
      <div className={styles.productImageSets}>
        <img
          className={styles.image39Icon}
          loading="lazy"
          alt=""
          src={image39}
        />
      </div>
      <img
        className={styles.productGItem}
        loading="lazy"
        alt=""
        src={vector3}
      />
      <div className={styles.bellRossNightlumWrapper} style={frameDiv4Style}>
        <div className={styles.bellRoss} style={bellRossStyle}>
          {bellRossNightlum}
        </div>
      </div>
    </div>
  );
};

export default ProductG;
