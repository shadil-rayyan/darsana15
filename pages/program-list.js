import { useCallback } from "react";
import { useRouter } from "next/router";
import ContentCard from "../components/content-card";
import styles from "./program-list.module.css";

const ProgramList = () => {
  const router = useRouter();

  const onContentCardContainerClick = useCallback(() => {
    router.push("/activity-description");
  }, [router]);

  return (
    <div className={styles.programList}>
      <div className={styles.contentCardParent}>
        <ContentCard
          onContentCardContainerClick={onContentCardContainerClick}
        />
        <ContentCard />
      </div>
      <div className={styles.contentCardGroup}>
        <ContentCard />
        <ContentCard />
      </div>
    </div>
  );
};

export default ProgramList;
