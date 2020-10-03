import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import { MarketOverview } from '../components/tradingViewWidgets';

const Market = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="pt-4">
        <MarketOverview />
      </div>
    </Layout>
  );
};

export default Market;
