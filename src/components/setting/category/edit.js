import { useEffect, useState } from 'react';
import Form from './Form';
import { getCategory, putCategory } from '../../../functions/CategoryApi';

const CategoryEdit = (props) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (props.match.params.id) {
            getCategory(props.match.params.id, localStorage.getItem('token')).then((res) => {
                setCategory(res.data);
            }).catch((e) => {
                console.log(e);
            });
        }
    }, []);

    return (
        <Form category={category} ActionMethod={putCategory} ActionBtn="Modifier" />
    )
};

export default CategoryEdit;
