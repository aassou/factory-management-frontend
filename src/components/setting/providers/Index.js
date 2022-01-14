import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProviders } from '../../../functions/ProviderApi';
import Card from './Card';

import '../../../assets/style/table.scss';

const ProvidersPage = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    getProviders(token).then((res) => {
      setProviders(res.data);
    }).catch((err) => {
      // redirect to 404 later
      console.log(err);
    });
  }, []);

  const RenderHelper = (providers) => {
    if (providers) {
      return providers.map(
        (provider) => (
          <Card key={provider.id} provider={provider} />
        )
      );
    }
  };
  
  return (
    <div className="mytable">
      <div className="text-end bg-light">
        <Link className="btn bg-light-blue text-white m-4" to="/providers/create">
          Ajouter Un Fournisseur
        </Link>
      </div>
      <table>
        <thead className='table-header-inversed'>
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Tel1</th>
            <th>Tel2</th>
            <th>Fax</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {RenderHelper(providers)}
        </tbody>
      </table>
    </div>
  );
};

export default ProvidersPage;
