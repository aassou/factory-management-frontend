import { useEffect, useState } from 'react';
import Form from './Form';
import { getSupplier, patchSupplier } from '../../functions/SupplierApi';

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

    const renderHelper = () => {
        return <Form supplier={supplier} ActionMethod={patchSupplier} ActionBtn="Modifier" />
    };

    return renderHelper();
};

export default SupplierEdit;
