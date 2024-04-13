import Content from "../components/content";
import styles from "./conversation-list.module.css";

const ConversationList = () => {
  return (
    <div className={styles.conversationList}>
      <Content />
      <Content image15IconBackgroundImage="unset" />
    </div>
  );
};

export default ConversationList;
