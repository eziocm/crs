import React, { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import el from "date-fns/locale/pt-BR";

registerLocale("el", el);

function FilterForm() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div>
      <form>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="data-ini">Data inicial:</label>
            <DatePicker
              locale="el" 
              selected={startDate}
              onChange={setStartDate}
            />
          </div>
          <div className="input-block">
            <label htmlFor="data-fin">Data final:</label>
            <DatePicker
              locale="el" 
              selected={endDate}
              onChange={setEndDate}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
