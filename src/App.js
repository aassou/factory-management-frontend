import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import SideBar from './components/SideBar';
import LinksBar from './components/LinksBar';
import SwitchLinks from './components/SwitchLinks';
import { checkToken } from './functions/Api';

// styling
import './assets/style/general.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const location = useLocation();

	const renderHelper = () => (
		location.pathname === '/login' ? (
		<div>
			<Navbar />
			<div className="row mx-0  p-0">
				<div className="bg-light p-0">
					<SwitchLinks />
				</div>
			</div>
		</div>
		) : (
		<div>
			<Navbar />
			<div className="row mycontent mx-0  p-0">
			<SideBar />
			<div className="App col-lg-10 bg-light p-4">
				<LinksBar />
				<div className="bg-light">
					<SwitchLinks />
				</div>
			</div>
			</div>
		</div>
		)
	);

  	return (renderHelper());
};

export default App;
