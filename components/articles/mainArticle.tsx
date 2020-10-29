import Date from '../../utils/date';

import styles from './MainArticle.module.css';

type NewsType = {
  news: {
    content: string;
    urlToImage: string;
    title: string;
    publishedAt: string;
    url: string;
  };
};

function MainArticle({ news }:NewsType) {
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
