import React from 'react';
import { Link } from 'react-router-dom';

const TableBody = ({ customer }) => (
  <tr>
    <td>{customer.number}</td>
    <td>{customer.name}</td>
    <td>{customer.address}</td>
    <td>{customer.phone}</td>
    <td>
      <Link to={`/customers/${customer.id}/update`} className="btn me-2 text-white bg-success">
        {' '}
        <i className="fas fa-sync" />
      </Link>
      {' '}
    </td>
  </tr>
);

export default TableBody;
