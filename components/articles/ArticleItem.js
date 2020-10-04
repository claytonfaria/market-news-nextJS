import Date from '../../utils/date';

import styles from './ArticleItem.module.css';

function ArticleItem({ news }) {
  const { content, urlToImage, title, publishedAt, url } = news;

  const reduceTextSize = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }

    return text;
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.articleItem}
    >
      <div className={styles.articleImgContainer}>
        <img src={urlToImage} alt="" />
      </div>
      <div className={styles.articleRightside}>
        <h4>{title}</h4>
        <h5>
          <Date dateString={publishedAt} />
        </h5>
        <p>{content && reduceTextSize(content, 150)}</p>
      </div>
    </a>
  );
}

export default ArticleItem;
