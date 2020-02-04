/* eslint-disable react/prop-types */
import React from 'react';

import Cell from '../Cell';

import './styles.css';

function DataTable({ headings, rows }) {
  function renderHeadingRow(_cell, cellIndex) {
    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header
      />
    );
  }

  function openSisregRequest(cod) {
    window.open(
      `http://sisregiii.saude.gov.br/cgi-bin/autorizador?ETAPA=VISUALIZAR&co_solicitacao=${cod}`,
      '_blank',
      'location=yes,height=640,width=980,scrollbars=yes,status=yes'
    );
  }

  function renderRow(_row, rowIndex) {
    return (
      <tr key={`row-${rowIndex}`} onClick={() => openSisregRequest(rows[rowIndex][1])}>
        {rows[rowIndex].map((_cell, cellIndex) => (
          <Cell
            key={`${rowIndex}-${cellIndex}`}
            content={rows[rowIndex][cellIndex]}
          />
        ))}
      </tr>
    );
  }

  const theadMarkup = (
    <tr key="heading">
      {headings.map(renderHeadingRow)}
    </tr>
  );

  const tbodyMarkup = rows.map(renderRow);

  return (
    <table className="table">
      <thead>{theadMarkup}</thead>
      <tbody>{tbodyMarkup}</tbody>
    </table>
  );
}

export default DataTable;
