import { useEffect, useState } from 'react';
import Form from './Form';
import { getProduct, putProduct } from '../../functions/ProductApi';

const ProductEdit = (props) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (props.match.params.id) {
            getProduct(props.match.params.id, localStorage.getItem('token')).then((res) => {
                setProduct(res.data);
            }).catch((e) => {
                console.log(e);
            });
        }
    }, []);

    return (
        <Form product={product} ActionMethod={putProduct} ActionBtn="Modifier" />
    )
};

export default ProductEdit;
