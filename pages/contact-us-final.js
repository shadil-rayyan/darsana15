import styles from "./contact-us-final.module.css";

const ContactUsFinal = () => {
  return (
    <div className={styles.contactUsFinal}>
      <div className={styles.navbar}>
        <img
          className={styles.image32Icon}
          loading="lazy"
          alt=""
          src="/image-32@2x.png"
        />
        <div className={styles.navbarInner}>
          <nav className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.initiatives}>Initiatives</div>
            <div className={styles.chapters}>Chapters</div>
            <div className={styles.services}>Services</div>
            <div className={styles.contactUs}>Contact Us</div>
          </nav>
        </div>
        <div className={styles.navbarChild}>
          <button className={styles.signInWrapper}>
            <div className={styles.signIn}>Sign In</div>
          </button>
        </div>
      </div>
      <main className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.getInTouchWrapper}>
            <h3 className={styles.getInTouch}>Get in Touch</h3>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.visitUsParent}>
              <div className={styles.visitUs}>{`Visit Us `}</div>
              <div className={styles.nssCollegeOfEngineeringagaWrapper}>
                <div className={styles.nssCollegeOf}>
                  NSS College of Engineering,Agathethara Palakkad Kerala
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.chatToUsParent}>
              <div className={styles.chatToUsContainer}>
                <span>Chat to Us</span>
                <span className={styles.span}>{` `}</span>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.ourFriendlyGroupIsHereToParent}>
                  <div className={styles.ourFriendlyGroup}>
                    Our friendly group is here to help !
                  </div>
                  <div className={styles.infodarsanagmailcom}>
                    infodarsana@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper1}>
              <div className={styles.callUsParent}>
                <div className={styles.callUs}>
                  <span>Call Us</span>
                  <span className={styles.span1}>{` `}</span>
                </div>
                <div className={styles.mondayFriday}>Monday - Friday</div>
              </div>
            </div>
            <div className={styles.div}>+91 99999999999</div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.socialMediaParent}>
              <div className={styles.socialMedia}>
                <span>Social Media</span>
                <span className={styles.span2}>{` `}</span>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.youtubeParent}>
                  <img
                    className={styles.youtubeIcon}
                    loading="lazy"
                    alt=""
                    src="/youtube1@2x.png"
                  />
                  <img
                    className={styles.instagramCircleIcon}
                    loading="lazy"
                    alt=""
                    src="/instagram-circle1@2x.png"
                  />
                  <img
                    className={styles.linkedinIcon}
                    loading="lazy"
                    alt=""
                    src="/linkedin1@2x.png"
                  />
                  <img
                    className={styles.facebookIcon}
                    loading="lazy"
                    alt=""
                    src="/facebook1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper4}>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>first Name</div>
                    <input className={styles.frameItem} type="text" />
                  </div>
                  <div className={styles.emailWrapper}>
                    <div className={styles.email}> Email</div>
                  </div>
                </div>
                <div className={styles.lastNameParent}>
                  <div className={styles.lastName}>Last Name</div>
                  <input className={styles.frameInner} type="text" />
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2364.svg"
                />
              </div>
              <div className={styles.frameWrapper5}>
                <div className={styles.phoneNumberParent}>
                  <div className={styles.phoneNumber}>Phone Number</div>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-5139774.svg"
                  />
                </div>
              </div>
              <div className={styles.subjectParent}>
                <div className={styles.subject}>Subject</div>
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/group-5139774.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper6}>
              <div className={styles.messageParent}>
                <div className={styles.message}>message</div>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2369.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper7}>
            <div className={styles.vectorParent}>
              <input className={styles.rectangleInput} type="checkbox" />
              <div className={styles.iUnderstandAndAgreeToTheWrapper}>
                <div className={styles.iUnderstandAnd}>
                  I understand and agree to the Privacy Policy
                </div>
              </div>
              <div className={styles.message1}>message</div>
            </div>
          </div>
          <div className={styles.frameWrapper8}>
            <div className={styles.sendMessageParent}>
              <div className={styles.sendMessage}>Send Message</div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/rectangle-2370.svg"
                />
                <div className={styles.sendMessage1}>
                  <span>Send</span>
                  <span className={styles.span3}>{` `}</span>
                  <span>Message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUsFinal;
