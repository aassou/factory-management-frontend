import { Link } from 'react-router-dom';
import className from 'classnames';

const SidebarLink = ({ active, iconClass, linkTo, linkName }) => {
  
	const linkClassName = className(
		'text-decoration-none',
		'align-items-center',
		'mb-3',
		'py-2',
		'd-flex',
		'text-light',
		{'border-start border-5 border-danger fw-bold': active}
	);

	const iconClassName = className(iconClass, 'px-3');
	const spanClassName = className({ 'text-danger': active, 'text-light': !active });

	return (
		<Link className={linkClassName} to={linkTo}>
			<i className={iconClassName} />
			<span className={spanClassName}>{linkName}</span>
		</Link>
	);
};

export default SidebarLink;
