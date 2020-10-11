import Head from 'next/head';

import { siteTitle } from '../components/layout';
import { StockOverview } from '../components/tradingViewWidgets';

const StocksOverview = () => {
  return (
    <>
      <Head>
        <title>{`${siteTitle} | Stocks Overview`}</title>
      </Head>
      <div className="pt-4">
        <StockOverview />
      </div>
    </>
  );
};

export default StocksOverview;
