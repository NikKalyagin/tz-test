import React from 'react';
import './tables.css';

const TableHeader = ({ requestSort, sortConfig }) => {
  const headers = [
    { label: 'Number', key: 'number' },
    { label: 'Developer', key: 'developer' },
    { label: 'Deadline', key: 'deadline' },
    { label: 'Type', key: 'type' },
    { label: 'Floor', key: 'floor' },
    { label: 'Square', key: 'square' },
  ];

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key}>
            <span onClick={() => requestSort(header.key)}>
              {header.label}
              {sortConfig && (
                <img
                  src={'arrowSort.svg'}
                  alt=""
                  className={getClassNamesFor(header.key)}
                />
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;