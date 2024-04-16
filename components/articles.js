import styles from "./articles.module.css";

const Articles = () => {
  return (
    <section className={styles.articles}>
      <div className={styles.articlesLayout}>
        <img
          className={styles.articleColumnIcon}
          alt=""
          src="/article-column@2x.png"
        />
        <div className={styles.articleCard}>
          <div className={styles.cardContent}>
            <img className={styles.oip1Icon} alt="" src="/oip-1@2x.png" />
            <div className={styles.article}>
              <div className={styles.divfield} />
            </div>
          </div>
        </div>
        <div className={styles.article1}>
          <img
            className={styles.divfieldIcon}
            alt=""
            src="/malayala-0-1@2x.png"
          />
        </div>
        <div className={styles.articleCard1}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/1113957-1@2x.png"
          />
          <div className={styles.articleDetails}>
            <div className={styles.article2} />
          </div>
        </div>
        <div className={styles.emptyColumn}>
          <div className={styles.article3} />
        </div>
        <img
          className={styles.articleColumnIcon1}
          alt=""
          src="/article-column@2x.png"
        />
      </div>
    </section>
  );
};

export default Articles;
