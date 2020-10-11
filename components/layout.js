import Head from 'next/head';

import Footer from './footer/footer';
import NavBar from './navBar/navBar';
import TickerBar from './tickerBar/tickerBar';

export const siteTitle = 'MarketNews';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid bg-light p-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn the latest Market information"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <NavBar />
      <TickerBar />
      <div className="container-lg">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
