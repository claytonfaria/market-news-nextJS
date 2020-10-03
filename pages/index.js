import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Layout, { siteTitle } from '../components/layout';
import MainArticle from '../components/articles/mainArticle';
import fetchArticles from '../lib/fetchArticles';
import ArticleItem from '../components/articles/ArticleItem';

export default function Home({ news }) {
  const [itemsToShow, setItemsToShow] = useState(12);
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = () => {
    setExpanded(true);
    setItemsToShow(news.length - 1);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MainArticle news={news[0]} />
      {news.slice(1, itemsToShow).map((item, index) => (
        <ArticleItem key={index} news={item} />
      ))}
      <Button
        className={`mb-3 ${expanded && 'd-none'}`}
        onClick={handleOnClick}
        variant="info"
      >
        More Articles
      </Button>
    </Layout>
  );
}

export async function getStaticProps() {
  const news = await fetchArticles();

  return {
    props: {
      news,
    },
    revalidate: 1000,
  };
}
