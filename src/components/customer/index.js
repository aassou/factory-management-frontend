import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import TableBody from "./table";
import { getCustomers } from '../../functions/CustomerApi';
import Pagination from "../pagination/Pagination";

import '../../assets/style/buttons.scss';

const CustomerList = () => {
    const [customers, setCustomers] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(async () => {
        const res = await getCustomers(token);
        setCustomers(res.data);
    }, []);

    const renderHelper = (customers) => {
        if (customers) {
            const customersList = customers["hydra:member"];

            return customersList.map((customer) => (
                <TableBody key={customer.id} customer={customer} />
            ))
        }
    };

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/customers/add">
                    Ajouter Un Client
                </Link>
            </div>
            <h1>Liste des Clients</h1>
            <table>
                <thead>
                    <tr>
                        <th>N° Client</th>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Téléphone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHelper(customers)}
                </tbody>
            </table>
            <Pagination  elements={customers} setElements={setCustomers} token={token} />
        </div>
    )
};

export default CustomerList;