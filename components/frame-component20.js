import styles from "./frame-component20.module.css";

const FrameComponent20 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.socialMediaSignuploginWrapper}>
            <div className={styles.socialMediaSignuplogin}>
              <div className={styles.socialMediaLogoParent}>
                <img
                  className={styles.socialMediaLogo}
                  alt=""
                  src="/social-media-logo.svg"
                />
                <div className={styles.continueWithGoogleWrapper}>
                  <div className={styles.continueWithGoogle}>
                    Continue with your Google account
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialMediaSignuplogin1}>
            <div className={styles.socialMediaLogoGroup}>
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo-1.svg"
              />
              <div className={styles.continueWithFacebookWrapper}>
                <div className={styles.continueWithFacebook}>
                  Continue with Facebook account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.socialMediaSignuploginParent}>
          <div className={styles.socialMediaSignuplogin2}>
            <div className={styles.socialMediaLogoContainer}>
              <img
                className={styles.socialMediaLogo2}
                alt=""
                src="/social-media-logo-1.svg"
              />
              <div className={styles.continueWithFacebook1}>
                Continue with Microsoft account
              </div>
            </div>
          </div>
          <img
            className={styles.image51Icon}
            loading="lazy"
            alt=""
            src="/image-511@2x.png"
          />
        </div>
      </div>
      <div className={styles.linkText}>
        <div className={styles.byCreatingAnContainer}>
          <span className={styles.bySigningUp}>
            By signing up, you agree to the
          </span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.termsOfUse}>Terms of use</span>
          <span className={styles.span1}>{` `}</span>
          <span className={styles.and}>and</span>
          <span className={styles.span2}>{` `}</span>
          <span className={styles.privacyPolicy}>
            <span>Privacy Policy.</span>
            <span className={styles.span3}>{` `}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent20;
