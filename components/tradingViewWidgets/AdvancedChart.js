import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function AdvancedChart({ ticker }) {
  return (
    <section
      style={{
        width: '100%',
        height: '610px',
        maxHeight: '80vh',
      }}
    >
      <TradingViewEmbed
        widgetType={widgetType.ADVANCED_CHART}
        widgetConfig={{
          colorTheme: 'light',
          autosize: true,
          symbol: `${ticker}`,
          largeChartUrl: '',
        }}
        copyrightLink={false}
      />
    </section>
  );
}

export default AdvancedChart;
