import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableBody from "./table";

import { getSuppliers } from '../../functions/SupplierApi';

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
          console.log(suppliersList);

          return suppliersList.map((supplier) => (
              <TableBody key={supplier.id} supplier={supplier} />
          ))
        }
      };

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/providers/create">
                    Ajouter Un Fournisseur
                </Link>
            </div>
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
        </div>
    )
};

export default SupplierList;