import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

import { siteTitle } from '../components/layout';
import SideBar from '../components/sideBar';
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
    <>
      <Head>
        <title>{`${siteTitle} | Home`}</title>
      </Head>
      <Row className="pt-4">
        <Col lg={8} className="w-100 min-vh-100">
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
        </Col>
        <Col lg={4} className="px-1 d-none d-lg-block">
          <SideBar />
        </Col>
      </Row>
    </>
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
