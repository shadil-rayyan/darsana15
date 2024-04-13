import FrameComponent20 from "../components/frame-component20";
import styles from "./login-page.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.frameParent}>
        <div className={styles.welcomeToDarsanaParent}>
          <h1 className={styles.welcomeToDarsana}>Welcome to Darsana</h1>
          <h3 className={styles.accessToThousands}>
            Access to thousands of design resources and templates
          </h3>
        </div>
        <div className={styles.frameWrapper}>
          <FrameComponent20 />
        </div>
      </div>
      <div className={styles.wrapper}>
        <img
          className={styles.icon}
          loading="lazy"
          alt=""
          src="/10586-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginPage;
