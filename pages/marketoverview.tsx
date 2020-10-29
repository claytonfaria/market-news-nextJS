import Head from 'next/head';

import { siteTitle } from '../components/layout';
import { MarketOverview } from '../components/tradingViewWidgets';

const Market = () => {
  return (
    <>
      <Head>
        <title>{`${siteTitle} | Market Overview`}</title>
      </Head>
      <div className="pt-4">
        <MarketOverview />
      </div>
    </>
  );
};

export default Market;
