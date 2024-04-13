import Content1 from "./content1";
import styles from "./contact-info.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.row}>
        <Content1
          iconEmail="/icon--email.svg"
          heading="Email"
          link="hello@relume.io"
        />
        <Content1
          iconEmail="/icon--phone.svg"
          heading="Phone"
          link="+1 (555) 000-0000"
        />
        <Content1
          iconEmail="/icon--pin.svg"
          heading="Bangalore"
          link="123 Sample St, Sydney NSW 2000 AU"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
