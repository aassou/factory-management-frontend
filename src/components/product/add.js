import Form from './Form';
import { addProduct } from '../../functions/ProductApi';

const ProductAdd = () => {
    return (
        <Form ActionMethod={addProduct} ActionBtn="Ajouter" />
    )
};

export default ProductAdd;
