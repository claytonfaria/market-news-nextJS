import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function MarketOverview() {
  return (
    <>
      <section className="pb-5">
        <h4 className="font-weight-bold pb-2 px-2">Market Overview</h4>

        <div style={{ width: '100%', height: '650px' }}>
          <TradingViewEmbed
            widgetType={widgetType.MARKET_OVERVIEW}
            widgetConfig={{
              colorTheme: 'light',
              autosize: true,
              largeChartUrl:
                'https://marketnews-next.vercel.app/symbol/{tvexchange}:{tvsymbol}',
            }}
            copyrightLink={false}
          />
        </div>
      </section>
    </>
  );
}

export default MarketOverview;
