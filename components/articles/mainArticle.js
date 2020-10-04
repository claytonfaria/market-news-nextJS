import Date from '../../utils/date';

import styles from './MainArticle.module.css';

function MainArticle({ news }) {
  const { urlToImage, title, publishedAt, url } = news;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mainArticle}
      >
        <img src={urlToImage} alt="" />
        <div className={styles.mainArticleTitle}>
          <h5>
            <Date dateString={publishedAt} />
          </h5>
          <h3>{title}</h3>
        </div>
      </a>
    </>
  );
}

export default MainArticle;
