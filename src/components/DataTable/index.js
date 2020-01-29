/* eslint-disable react/prop-types */
import React from 'react';

import Cell from '../Cell';

import './styles.css';

// eslint-disable-next-line react/prop-types
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

  function renderRow(_row, rowIndex) {
    return (
      <tr key={`row-${rowIndex}`}>
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
