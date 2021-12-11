import { useEffect, useState } from 'react';
import ClientForm from './ClientForm';
import { getClientData, AddClient, UpdateClient } from '../../functions/Api';

const EditClient = (props) => {
  const [client, setClient] = useState(null);
  useEffect(() => {
    if (props.match.params.id) {
      getClientData(localStorage.getItem('token'), props.match.params.id)
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
      return <ClientForm client={client} ActionMethod={UpdateClient} ActionBtn="Update" />;
    }
    return <ClientForm ActionMethod={AddClient} ActionBtn="Create" />;
  };

  return renderHelper();
};

export default EditClient;
