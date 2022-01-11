import { useEffect, useState } from 'react';
import Form from './Form';
import { getCustomer, putCustomer } from '../../functions/CustomerApi';

const CustomerEdit = (props) => {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        if (props.match.params.id) {
            getCustomer(props.match.params.id, localStorage.getItem('token')).then((res) => {
                setCustomer(res.data);
            }).catch((e) => {
                console.log(e);
            });
        }
    }, []);

    return (
        <Form customer={customer} ActionMethod={putCustomer} ActionBtn="Modifier" />
    )
};

export default CustomerEdit;
