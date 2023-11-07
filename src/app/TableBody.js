import React from 'react';
import './tables.css';
const TableBody = ({ data }) => {
  return (
    <tbody>
      {data && data.map((row) => (
        <tr key={row.id}>
          <td>{row.number}</td>
          <td>{row.developer}</td>
          <td>{row.deadline}</td>
          <td>{row.type}</td>
          <td>{row.floor}</td>
          <td>{row.square}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;