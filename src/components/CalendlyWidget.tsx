import React from 'react';

interface CalendlyWidgetProps {
  className?: string;
  url?: string;
  height?: number;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  className = '', 
  url = 'https://calendly.com/reelroom-info',
  height = 700
}) => {
  return (
    <div className={className}>
      {/* Calendly inline widget begin */}
      <div 
        className="calendly-inline-widget" 
        data-url={url} 
        style={{ minWidth: '320px', height: `${height}px` }}
      />
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      {/* Calendly inline widget end */}
    </div>
  );
};

export default CalendlyWidget; 