import { useEffect, useState } from 'react';
import ClientForm from './ClientForm';
import { getClient, addClient, updateClient } from '../../functions/ClientApi';

const EditClient = (props) => {
  const [client, setClient] = useState(null);
  
  useEffect(() => {
    if (props.match.params.id) {
      getClient(props.match.params.id, localStorage.getItem('token'))
        .then((res) => {
          setClient(res.data);
        }).catch((e) => {
          // add redirect
          console.log(e);
        });
    }
  }, []);

  const renderHelper = () => {
    if (client) {
      return <ClientForm client={client} ActionMethod={updateClient} ActionBtn="Update" />;
    }
    return <ClientForm ActionMethod={addClient} ActionBtn="Create" />;
  };

  return renderHelper();
};

export default EditClient;
