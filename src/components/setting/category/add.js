// import { useEffect, useState } from 'react';
import Form from './Form';
import { addCategory } from '../../../functions/CategoryApi';

const CategoryAdd = (props) => {
    // const [supplier, setSupplier] = useState(null);

    // useEffect(() => {}, []);

    return (
        <Form ActionMethod={addCategory} ActionBtn="Ajouter" />
    )
};

export default CategoryAdd;
