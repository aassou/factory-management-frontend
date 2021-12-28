import { useEffect, useState } from 'react';
import Form from './Form';
import { addProvider, getProvider, updateProvider } from '../../../functions/ProviderApi';

const Action = (props) => {
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    if (props.match.params.id) {
      getProvider(props.match.params.id, localStorage.getItem('token')).then((res) => {
        setProvider(res.data);
      }).catch((e) => {
        // add redirect
        console.log(e);
      });
    }
  }, []);

  const renderHelper = () => {
    if (provider) {
      return <Form provider={provider} ActionMethod={updateProvider} ActionBtn="Modifier" />;
    }
    return <Form ActionMethod={addProvider} ActionBtn="Ajouter" />;
  };

  return renderHelper();
};

export default Action;
