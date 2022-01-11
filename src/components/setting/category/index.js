import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../axios";
import TableBody from "./table";
import { getCategories } from '../../../functions/CategoryApi';

import '../../../assets/style/buttons.scss';

const CategoryList = () => {
    const [categories, setCategories] = useState(null);

    useEffect(async () => {
        const token = localStorage.getItem('token');

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

    const goToFirstPage = async () => {
        const token = localStorage.getItem('token');

        if (categories && categories["hydra:view"] && categories["hydra:view"]["hydra:first"]) {
            const res = await axiosInstance.get(categories["hydra:view"]["hydra:first"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCategories(res.data);
            console.log(res.data);
        }
    }

    const goToNextPage = async () => {
        const token = localStorage.getItem('token');

        if (categories && categories["hydra:view"] && categories["hydra:view"]["hydra:next"]) {
            const res = await axiosInstance.get(categories["hydra:view"]["hydra:next"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCategories(res.data);
            console.log(res.data);
        }
    }

    const goToPrevPage = async () => {
        const token = localStorage.getItem('token');

        if (categories && categories["hydra:view"] && categories["hydra:view"]["hydra:previous"]) {
            const res = await axiosInstance.get(categories["hydra:view"]["hydra:previous"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCategories(res.data);
            console.log(res.data);
        }
    }

    const goToLastPage = async () => {
        const token = localStorage.getItem('token');

        if (categories && categories["hydra:view"] && categories["hydra:view"]["hydra:last"]) {
            const res = await axiosInstance.get(categories["hydra:view"]["hydra:last"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCategories(res.data);
            console.log(res.data);
        }
    }

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/settings/categories/add">
                    Ajouter Une Catégorie
                </Link>
            </div>
            <h1>Liste des Catégories</h1>
            <table>
                <thead>
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
            <button type="button" className="btn-inverse" onClick={goToFirstPage}>&lt;</button>
            <button type="button" className="btn-inverse" onClick={goToPrevPage}>Précédent</button>
            <button type="button" className="btn-inverse" onClick={goToNextPage}>Suivant</button>
            <button type="button" className="btn-inverse" onClick={goToLastPage}>&gt;</button>
        </div>
    )
};

export default CategoryList;