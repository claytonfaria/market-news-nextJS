import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function FundamentalData({ ticker }) {
  return (
    <section
      style={{
        width: '100%',
        height: '800px',
      }}
    >
      <TradingViewEmbed
        widgetType={widgetType.FUNDAMENTAL_DATA}
        widgetConfig={{
          colorTheme: 'light',
          autosize: true,
          symbol: `${ticker}`,
          largeChartUrl:
            'https://marketnews-next.vercel.app/symbol/{tvexchange}:{tvsymbol}',
        }}
        copyrightLink={false}
      />
    </section>
  );
}

export default FundamentalData;
