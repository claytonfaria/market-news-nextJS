import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from './footer/footer';
import NavBar from './navBar/navBar';
import TickerBar from './tickerBar/tickerBar';
import SideBar from './sideBar/sideBar';

export const siteTitle = 'MarketNews';

const Layout = ({ children, home }) => {
  return (
    <div className="container-fluid bg-light p-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn the latest Market information"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </Head>

      <NavBar />
      <TickerBar />
      <div className="container-lg">
        <main>
          {home ? (
            <Row className="pt-4">
              <Col lg={8} className="w-100 min-vh-100">
                {children}
              </Col>
              <Col lg={4} className="px-1 d-none d-lg-block">
                <SideBar />
              </Col>
            </Row>
          ) : (
            <>{children}</>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
