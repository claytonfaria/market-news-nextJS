import Head from 'next/head';

import { siteTitle } from '../components/layout';
import { EconomicCalendar } from '../components/tradingViewWidgets';

const Calendar = () => {
  return (
    <>
      <Head>
        <title>{`${siteTitle} | Economic Calendar`}</title>
      </Head>
      <div className="pt-4">
        <EconomicCalendar />
      </div>
    </>
  );
};

export default Calendar;
