import { useEffect, useState } from 'react';
import Form from './Form';
import { getSupplier, putSupplier } from '../../functions/SupplierApi';

const SupplierEdit = (props) => {
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

    return (
        <Form supplier={supplier} ActionMethod={putSupplier} ActionBtn="Modifier" />
    )
};

export default SupplierEdit;
