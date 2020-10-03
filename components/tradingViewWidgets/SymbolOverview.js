import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function SymbolOverview({ ticker }) {
  return (
    <section
      className="py-4"
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <TradingViewEmbed
        widgetType={widgetType.SYMBOL_OVERVIEW}
        widgetConfig={{
          colorTheme: 'light',
          autosize: true,
          symbols: [`${ticker}`],
          largeChartUrl:
            'https://marketnews.netlify.app/{tvexchange}:{tvsymbol}',
        }}
        copyrightLink={false}
      />
    </section>
  );
}

export default SymbolOverview;
