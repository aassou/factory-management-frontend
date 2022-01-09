import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import TableBody from "./table";
import { getSuppliers } from '../../functions/SupplierApi';

import '../../assets/style/buttons.scss';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState(null);

    useEffect(async () => {
        const token = localStorage.getItem('token');

        const res = await getSuppliers(token);
        setSuppliers(res.data);
    }, []);

    const renderHelper = (suppliers) => {
        if (suppliers) {
            const suppliersList = suppliers["hydra:member"];

            return suppliersList.map((supplier) => (
                <TableBody key={supplier.id} supplier={supplier} />
            ))
        }
    };

    const goToFirstPage = async () => {
        const token = localStorage.getItem('token');

        if (suppliers && suppliers["hydra:view"] && suppliers["hydra:view"]["hydra:first"]) {
            const res = await axiosInstance.get(suppliers["hydra:view"]["hydra:first"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setSuppliers(res.data);
            console.log(res.data);
        }
    }

    const goToNextPage = async () => {
        const token = localStorage.getItem('token');

        if (suppliers && suppliers["hydra:view"] && suppliers["hydra:view"]["hydra:next"]) {
            const res = await axiosInstance.get(suppliers["hydra:view"]["hydra:next"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setSuppliers(res.data);
            console.log(res.data);
        }
    }

    const goToPrevPage = async () => {
        const token = localStorage.getItem('token');

        if (suppliers && suppliers["hydra:view"] && suppliers["hydra:view"]["hydra:previous"]) {
            const res = await axiosInstance.get(suppliers["hydra:view"]["hydra:previous"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setSuppliers(res.data);
            console.log(res.data);
        }
    }

    const goToLastPage = async () => {
        const token = localStorage.getItem('token');

        if (suppliers && suppliers["hydra:view"] && suppliers["hydra:view"]["hydra:last"]) {
            const res = await axiosInstance.get(suppliers["hydra:view"]["hydra:last"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setSuppliers(res.data);
            console.log(res.data);
        }
    }

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/providers/create">
                    Ajouter Un Fournisseur
                </Link>
            </div>
            <h1>Liste des Fournisseurs</h1>
            <table>
                <thead>
                    <tr>
                        <th>N° Founisseur</th>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Téléphone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHelper(suppliers)}
                </tbody>
            </table>
            <button type="button" className="btn-inverse" onClick={goToFirstPage}>&lt;</button>
            <button type="button" className="btn-inverse" onClick={goToPrevPage}>Précédent</button>
            <button type="button" className="btn-inverse" onClick={goToNextPage}>Suivant</button>
            <button type="button" className="btn-inverse" onClick={goToLastPage}>&gt;</button>
        </div>
    )
};

export default SupplierList;