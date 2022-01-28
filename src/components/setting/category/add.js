import Form from './Form';
import { addCategory } from '../../../functions/CategoryApi';

const CategoryAdd = () => {
    return (
        <Form ActionMethod={addCategory} ActionBtn="Ajouter" />
    )
};

export default CategoryAdd;
