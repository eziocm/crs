import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import FilterForm from './components/FilterForm';
import DataTable from './components/DataTable';

function App() {
  const headings = [
    '',
    'Cód Solicit',
    'Data',
    'Paciente',
    'Idade',
    'Procedimento',
    'CID',
    'Central Solicitante',
    'Situação',
  ];

  const rows = [
    [
      '',
      '323970656',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
    [
      '',
      '123456',
      '01/01/2020',
      'ABC',
      '30 anos',
      'CONSULTA EM OFTALMOLOGIA - CATARATA',
      'H26',
      'ITAJA',
      '',
    ],
  ];

  return (
    <div id="app">
      <aside>
        <strong>FILTROS</strong>
        <FilterForm />
      </aside>
      <main>
        <DataTable headings={headings} rows={rows} />
      </main>
    </div>
  );
}

export default App;
