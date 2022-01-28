import React from 'react';
import { Link } from 'react-router-dom';

const TableBody = ({ category }) => (
	<tr>
		<td>{category.name}</td>
		<td>
			<a href={category.image} target="_blank">
				<img width={50} height={50} src={category.image}/>
			</a>
		</td>
		<td>
		<Link to={`/settings/categories/${category.id}/update`} className="btn me-2 text-white bg-success">
			{' '}
			<i className="fas fa-sync" />
		</Link>
		{' '}
		</td>
	</tr>
);

export default TableBody;
