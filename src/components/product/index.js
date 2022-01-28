import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableBody from "./Table";
import { getProducts } from '../../functions/ProductApi';
import Pagination from "../pagination/Pagination";

import '../../assets/style/table.scss';
import '../../assets/style/buttons.scss';
import { HTTP_STATUS_CODE } from "../../utils/utils";

const ProductList = () => {
    const [products, setProducts] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(async () => {
        const response = await getProducts(token);

        if (response.status === HTTP_STATUS_CODE.SUCESS.OK) {
            setProducts(response.data);
        }
    }, []);

    const renderHelper = (products) => {
        if (products) {
            const productList = products["hydra:member"];

            return productList.map(product => (
                <TableBody key={product.id} product={product} />
            ))
        }
    };

    return (
        <div className="mytable">
            <div className="text-end bg-light">
                <Link className="btn bg-light-blue text-white m-4" to="/products/add">
                    Ajouter Produit
                </Link>
            </div>
            <h1>Liste des Produits</h1>
            <table>
                <thead className="table-header-inversed">
                    <tr>
                        <th>Référence</th>
                        <th>Longueur</th>
                        <th>Hauteur</th>
                        <th>Épaisseur</th>
                        <th>Poids</th>
                        <th>Prix Achat</th>
                        <th>Prix Vente</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHelper(products)}
                </tbody>
            </table>
            <Pagination elements={products} setElements={setProducts} token={token} />
        </div>
    )
};

export default ProductList;