import Breadcrumb from "../components/breadcrumb";
import FrameComponent13 from "../components/frame-component13";
import FrameComponent12 from "../components/frame-component12";
import styles from "./product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <main className={styles.productList}>
        <Breadcrumb />
        <FrameComponent13 />
        <FrameComponent12 />
      </main>
    </div>
  );
};

export default Product;
