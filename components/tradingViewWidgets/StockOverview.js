import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function StockOverview() {
  return (
    <>
      <section className="pb-5">
        <h4 className="font-weight-bold pb-2 px-2">Stocks Overview</h4>

        <div style={{ width: '100%', height: '650px' }}>
          <TradingViewEmbed
            widgetType={widgetType.STOCK_MARKET}
            widgetConfig={{
              colorTheme: 'light',
              autosize: true,
              largeChartUrl:
                'https://marketnews.netlify.app/{tvexchange}:{tvsymbol}',
            }}
            copyrightLink={false}
          />
        </div>
      </section>
    </>
  );
}

export default StockOverview;
