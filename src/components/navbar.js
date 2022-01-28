import { Link } from 'react-router-dom';
import '../assets/style/navbar.scss';

const MyNav = () => (
	<nav className="p-0 m-0 mb-5 row navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div className="col-lg-2 px-4 p-2 bg-blue d-flex justify-content-between">
			{/* TODO: Add React router to home page  */}
			<div className="logo">
				<Link className="navbar-brand" to="/">
				<i className="fa fa-industry"></i> FactoryManager
				</Link>
			</div>
			<button
				className="navbar-toggler navbar-dark text-light border-none"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
		</div>
		<div className="collapse col-lg-10 navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0" />
		</div>	
	</nav>
);

export default MyNav;
