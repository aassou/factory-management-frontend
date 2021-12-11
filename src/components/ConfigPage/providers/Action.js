import { useEffect, useState } from 'react';
import Form from './Form';
import { AddProvider, getProvider, UpdateProvider } from '../../../functions/Api';

const Action = (props) => {
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    if (props.match.params.id) {
      getProvider(localStorage.getItem('token'), props.match.params.id).then((res) => {
        setProvider(res.data);
      }).catch((e) => {
        // add redirect
        console.log(e);
      });
    }
  }, []);

  const renderHelper = () => {
    if (provider) {
      return <Form provider={provider} ActionMethod={UpdateProvider} ActionBtn="Modifier" />;
    }
    return <Form ActionMethod={AddProvider} ActionBtn="Ajouter" />;
  };

  return renderHelper();
};

export default Action;
