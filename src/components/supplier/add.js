import { useEffect, useState } from 'react';
import Form from './Form';
import { addSupplier } from '../../functions/SupplierApi';

const SupplierAdd = (props) => {
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    if (props.match.params.id) {
      getSupplier(props.match.params.id, localStorage.getItem('token')).then((res) => {
        setSupplier(res.data);
      }).catch((e) => {
        console.log(e);
      });
    }
  }, []);

  const renderHelper = () => {
      return <Form supplier={supplier} ActionMethod={addSupplier} ActionBtn="Ajouter" />;
  };

  return renderHelper();
};

export default SupplierEdit;
