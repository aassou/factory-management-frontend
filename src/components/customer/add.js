// import { useEffect, useState } from 'react';
import Form from './Form';
import { addCustomer } from '../../functions/CustomerApi';

const CustomerAdd = (props) => {
    // const [supplier, setSupplier] = useState(null);

    // useEffect(() => {}, []);

    return (
        <Form ActionMethod={addCustomer} ActionBtn="Ajouter" />
    )
};

export default CustomerAdd;
