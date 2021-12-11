import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllClients } from '../../functions/Api';
import ClientsCard from './ClientsCard';

const Clients = () => {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    getAllClients(token).then((res) => {
      setClients(res.data);
    }).catch((err) => {
      // redirect to 404 later
      console.log(err);
    });
  }, []);

  const RenderHelper = (clients) => {
    if (clients) {
      const res = clients.map((client) => (<ClientsCard key={client.id} client={client} />));
      return res;
    }
  };
  return (
    <div className="mytable">
      <div className="text-end bg-light">
        <Link className="btn bg-light-blue text-white m-4" to="/configuration/clients/add">Ajouter Un Client</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>CIN</th>
            <th>الاسم</th>
            <th>العنوان</th>
            <th>Adresse</th>
            <th>Tel1</th>
            <th>Tel2</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {RenderHelper(clients)}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
