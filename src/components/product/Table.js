import React from 'react';
import { Link } from 'react-router-dom';

const TableBody = ({ product }) => (
  <tr>
    <td>{product.reference}</td>
    <td>{product.length}</td>
    <td>{product.height}</td>
    <td>{product.width}</td>
    <td>{product.weight}</td>
    <td>{product.purchasePrice}</td>
    <td>{product.salePrice}</td>
    <td>
        <a href={product.image} target="_blank">
            <img width={50} height={50} src={product.image}/>
        </a>
    </td>
    <td>
      <Link to={`/products/${product.id}/update`} className="btn me-2 text-white bg-success">
        {' '}
        <i className="fas fa-sync" />
      </Link>
      {' '}
    </td>
  </tr>
);

export default TableBody;
