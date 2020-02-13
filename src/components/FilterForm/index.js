import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { subMonths, getDate, differenceInDays } from 'date-fns'
import el from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale("el", el);

function FilterForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  function renderDayContents(date) {
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{getDate(date)}</span>;
  };

  return (
    <div>
      <form>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="data-ini">Data inicial:</label>
            <DatePicker
              locale="el" 
              dateFormat="dd/MM/yyyy"
              minDate={subMonths(new Date(), 12)}
              maxDate={endDate}
              selected={startDate}
              onChange={date => setStartDate(date)}
              todayButton="Hoje"
              renderDayContents={date => renderDayContents(date)}
              disabledKeyboardNavigation
            />
          </div>
          <div className="input-block">
            <label htmlFor="data-fin">Data final:</label>
            <DatePicker
              locale="el" 
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              maxDate={new Date()}
              selected={new Date()}
              selected={endDate}
              onChange={date => setEndDate(date)}
              todayButton="Hoje"
              renderDayContents={date => renderDayContents(date)}
              disabledKeyboardNavigation
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
