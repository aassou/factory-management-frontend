import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ provider }) => (
  <tr>
    <td>{provider.nom}</td>
    <td>{provider.adresse}</td>
    <td>{provider.telephone1}</td>
    <td>{provider.telephone2}</td>
    <td>{provider.fax}</td>
    <td>{provider.email}</td>
    <td>
      <Link to={`/providers/${provider.id}/update`} className="btn me-2 text-white bg-success">
        {' '}
        <i className="fas fa-sync" />
      </Link>
      {' '}
    </td>
  </tr>
);

export default Card;
