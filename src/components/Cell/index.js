import React from 'react';

import './styles.css';

function Cell({ content, header }) {
  const cellMarkup = header ? (
    <th className="cell-header">
      {content}
    </th>
  ) : (
    <td className="cell-data">
      {content}
    </td>
  );

  return (cellMarkup);
}

export default Cell;
