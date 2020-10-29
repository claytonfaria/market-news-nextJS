import { useEffect, useState } from 'react';

import Date from '../../utils/date';

import styles from './ArticleItem.module.css';

type NewsType = {
  news: {
    content: string;
    urlToImage: string;
    title: string;
    publishedAt: string;
    url: string;
  };
};

function ArticleItem({ news }:NewsType) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);
  const { content, urlToImage, title, publishedAt, url } = news;

  const reduceTextSize = (text:string, maxLength: number) => {
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
      {isDesktop && (
        <div className={styles.articleImgContainer}>
          <img src={urlToImage} alt="" />
        </div>
      )}
      <div className={styles.articleRightside}>
        <h4>{title && reduceTextSize(title, isDesktop ? 120 : 80)}</h4>
        <h5>
          <Date dateString={publishedAt} />
        </h5>
        <p>{content && reduceTextSize(content, isDesktop ? 150 : 100)}</p>
      </div>
    </a>
  );
}

export default ArticleItem;
