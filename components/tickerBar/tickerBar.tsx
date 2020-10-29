import { TickerTape } from '../tradingViewWidgets';

function TickerBar() {
  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.85)',
        pointerEvents: 'none',
      }}
    >
      <TickerTape />
    </div>
  );
}

export default TickerBar;
