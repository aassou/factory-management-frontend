import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableBody from "./Table";
import { getCategories } from '../../../functions/CategoryApi';
import Pagination from "../../pagination/Pagination";

import '../../../assets/style/buttons.scss';
import '../../../assets/style/table.scss';

const CategoryList = () => {
    const [categories, setCategories] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(async () => {
        const res = await getCategories(token);
        setCategories(res.data);
    }, []);

    const renderHelper = (categories) => {
        if (categories) {
            const categoriesList = categories["hydra:member"];

            return categoriesList.map((category) => (
                <TableBody key={category.id} category={category} />
            ))
        }
    };

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/settings/categories/add">
                    Ajouter Catégorie
                </Link>
            </div>
            <h1>Liste des Catégories</h1>
            <table>
                <thead className="table-header-inversed">
                    <tr>
                        <th>Nom</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHelper(categories)}
                </tbody>
            </table>
            <Pagination  elements={categories} setElements={setCategories} token={token} />
        </div>
    )
};

export default CategoryList;