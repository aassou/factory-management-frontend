import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import TableBody from "./table";
import { getSuppliers } from '../../functions/SupplierApi';
import Pagination from "../pagination/Pagination";

import '../../assets/style/table.scss';
import '../../assets/style/buttons.scss';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(async () => {
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

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/suppliers/add">
                    Ajouter Fournisseur
                </Link>
            </div>
            <h1>Liste des Fournisseurs</h1>
            <table>
                <thead className="table-header-inversed">
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
            <Pagination  elements={suppliers} setElements={setSuppliers} token={token} />
        </div>
    )
};

export default SupplierList;