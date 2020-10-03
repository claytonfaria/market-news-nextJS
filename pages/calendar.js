import Layout from '../components/layout';
import { EconomicCalendar } from '../components/tradingViewWidgets';

const Calendar = () => {
  return (
    <Layout>
      <div className="pt-4">
        <EconomicCalendar />
      </div>
    </Layout>
  );
};

export default Calendar;
