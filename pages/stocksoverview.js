import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import { StockOverview } from '../components/tradingViewWidgets';

const StocksOverview = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="pt-4">
        <StockOverview />
      </div>
    </Layout>
  );
};

export default StocksOverview;
