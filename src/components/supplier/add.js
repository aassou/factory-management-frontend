// import { useEffect, useState } from 'react';
import Form from './Form';
import { addSupplier } from '../../functions/SupplierApi';

const SupplierAdd = (props) => {
    // const [supplier, setSupplier] = useState(null);

    // useEffect(() => {}, []);

    return (
        <Form ActionMethod={addSupplier} ActionBtn="Ajouter" />
    )
};

export default SupplierAdd;
