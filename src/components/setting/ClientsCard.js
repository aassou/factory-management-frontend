import React from 'react';
import { Link } from 'react-router-dom';

const ClientsCard = (props) => {
  const { client } = props;
  return (
    <tr>
      <td>{client.nom}</td>
      <td>{client.cin}</td>
      <td>{client.nomArabe}</td>
      <td>{client.adresseArabe}</td>

      <td>{client.adresse}</td>
      <td>{client.telephone1}</td>
      <td>{client.telephone2}</td>
      <td>{client.email}</td>
      <td>
        <Link to={`/configuration/clients/edit/${client.id}`} className="btn me-2 text-white bg-success">
          {' '}
          <i className="fas fa-sync" />
        </Link>
        {' '}
      </td>
    </tr>
  );
};

export default ClientsCard;
