import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function EconomicCalendar() {
  return (
    <>
      <section className="pb-5">
        <h4 className="font-weight-bold pb-2 px-2">Economic Calendar</h4>

        <div style={{ width: '100%', height: '650px' }}>
          <TradingViewEmbed
            widgetType={widgetType.ECONOMIC_CALENDAR}
            widgetConfig={{
              colorTheme: 'light',
              autosize: true,
            }}
            copyrightLink={false}
          />
        </div>
      </section>
    </>
  );
}

export default EconomicCalendar;
