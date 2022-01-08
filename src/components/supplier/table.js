import React from 'react';
import { Link } from 'react-router-dom';

const TableBody = ({ supplier }) => (
  <tr>
    <td>{supplier.number}</td>
    <td>{supplier.name}</td>
    <td>{supplier.address}</td>
    <td>{supplier.phone}</td>
    <td>
      <Link to={`/suppliers/${supplier.id}/update`} className="btn me-2 text-white bg-success">
        {' '}
        <i className="fas fa-sync" />
      </Link>
      {' '}
    </td>
  </tr>
);

export default TableBody;
