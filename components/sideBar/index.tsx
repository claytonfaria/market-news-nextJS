import {
  EconomicCalendar,
  MarketOverview,
  StockOverview,
} from '../tradingViewWidgets';

function SideBar() {
  return (
    <>
      <StockOverview />
      <MarketOverview />
      <EconomicCalendar />
    </>
  );
}

export default SideBar;
