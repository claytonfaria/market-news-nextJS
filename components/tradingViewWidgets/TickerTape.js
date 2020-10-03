import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function TickerTape() {
  return (
    <TradingViewEmbed
      widgetType={widgetType.TICKER_TAPE}
      widgetConfig={{
        colorTheme: 'light',
        autosize: true,
        largeChartUrl: '',
        symbols: [
          {
            proName: 'FOREXCOM:SPXUSD',
            title: 'S&P 500',
          },
          {
            proName: 'FOREXCOM:NSXUSD',
            title: 'Nasdaq 100',
          },
          {
            proName: 'FOREXCOM:DJI',
            title: 'Dow Jones',
          },
          {
            proName: 'FX:EURUSD',
            title: 'EUR/USD',
          },
          {
            proName: 'BITSTAMP:BTCUSD',
            title: 'BTC/USD',
          },
          {
            description: 'IBOVESPA',
            proName: 'INDEX:IBOV',
          },
          {
            description: 'DAX',
            proName: 'XETR:DAX',
          },
          {
            description: 'NKY',
            proName: 'INDEX:NKY',
          },
        ],
      }}
      copyrightLink={false}
    />
  );
}

export default TickerTape;
