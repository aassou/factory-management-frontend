import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import TableBody from "./table";
import { getCustomers } from '../../functions/CustomerApi';

import '../../assets/style/buttons.scss';

const CustomerList = () => {
    const [customers, setCustomers] = useState(null);

    useEffect(async () => {
        const token = localStorage.getItem('token');

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

    const goToFirstPage = async () => {
        const token = localStorage.getItem('token');

        if (customers && customers["hydra:view"] && customers["hydra:view"]["hydra:first"]) {
            const res = await axiosInstance.get(customers["hydra:view"]["hydra:first"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCustomers(res.data);
            console.log(res.data);
        }
    }

    const goToNextPage = async () => {
        const token = localStorage.getItem('token');

        if (customers && customers["hydra:view"] && customers["hydra:view"]["hydra:next"]) {
            const res = await axiosInstance.get(customers["hydra:view"]["hydra:next"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCustomers(res.data);
            console.log(res.data);
        }
    }

    const goToPrevPage = async () => {
        const token = localStorage.getItem('token');

        if (customers && customers["hydra:view"] && customers["hydra:view"]["hydra:previous"]) {
            const res = await axiosInstance.get(customers["hydra:view"]["hydra:previous"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCustomers(res.data);
            console.log(res.data);
        }
    }

    const goToLastPage = async () => {
        const token = localStorage.getItem('token');

        if (customers && customers["hydra:view"] && customers["hydra:view"]["hydra:last"]) {
            const res = await axiosInstance.get(customers["hydra:view"]["hydra:last"],
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setCustomers(res.data);
            console.log(res.data);
        }
    }

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
            <button type="button" className="btn-inverse" onClick={goToFirstPage}>&lt;</button>
            <button type="button" className="btn-inverse" onClick={goToPrevPage}>Précédent</button>
            <button type="button" className="btn-inverse" onClick={goToNextPage}>Suivant</button>
            <button type="button" className="btn-inverse" onClick={goToLastPage}>&gt;</button>
        </div>
    )
};

export default CustomerList;